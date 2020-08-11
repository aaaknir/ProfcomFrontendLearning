'use strict'

const fs = require('fs');

fs.readFile('list.dat', 'utf8', function (err, text) {
    if (err) {
        return console.error(err);
    }
    const [filename1, filename2, filename3, filename4] = text
        .split('\n')
        .map(name => name.trim())
        .filter(name => !!name);
    let summ = 0;

    console.log([filename1, filename2, filename3, filename4]);
    fs.readFile(filename1, 'utf8', function (err, text) {
        if (err) {
            return console.error(err);
        }

        summ +=+ text;
        fs.readFile(filename2, 'utf8', function (err, text) {
            if (err) {
                return console.error(err);
            }
            summ += +text;
            fs.readFile(filename3, 'utf8', function (err, text) {
                if (err) {
                    return console.error(err);
                }
                summ += +text;
                fs.readFile(filename4, 'utf8', function (err, text) {
                    if (err) {
                        return console.error(err);
                    }
                    summ += +text;
                    fs.writeFile('result-dummy.dat', `Result is ${summ}`, 'utf8', function (err) {
                        if (err) {
                            return console.error(err);
                        }
                        console.log('FINISH!');
                        process.exit();
                    });
                });
            });
        });
    });
});