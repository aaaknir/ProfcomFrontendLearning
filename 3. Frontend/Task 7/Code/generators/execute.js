'use strict'

const fs = require('fs');

function execute(generator, value) {
    const next = generator.next(value);
    if (!next.done) {
        next.value.then(
            result => execute(generator, result),
            err => generator.throw(err)
        );
    } else {
        console.log('FINISH!');
        process.exit();
    }
}

function read (file) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, 'utf8', function (err, text) {
            if (err) {
                return reject(err);
            }
            resolve(text);
        });
    });
}

function write (file, source) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(file, source, 'utf8', function (err) {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

const gen1 = function *() {
    const list = yield read ('list.dat');
    const filenames = list.split('\n').map(name => name.trim()).filter(name => !!name);
    let summ = 0;
    try {
        const num1 = yield read(filenames[0]);
        const num2 = yield read(filenames[1]);
        const num3 = yield read(filenames[2]);
        const num4 = yield read(filenames[3]);
    } catch (e) {
        // logic
    }
    summ +=+ num1;
    summ +=+ num2;
    summ +=+ num3;
    summ +=+ num4;
    yield write('result-execute1.dat', `Result id ${summ}`);
};

const gen2 = function *() {
    const list = yield read ('list.dat');
    const filenames = list.split('\n').map(name => name.trim()).filter(name => !!name);
    let summ = 0;
    for (let filename of filenames) {
        const num = yield read(filename);
        summ +=+ num;
    }
    yield write('result-execute2.dat', `Result id ${summ}`);
};

const gen3 = function *() {
    const list = yield read ('list.dat');
    const filenames = list.split('\n').map(name => name.trim()).filter(name => !!name);
    try {
        const nums = yield Promise.all(filenames.map(filename => read(filename)));
    } catch (e) {
        //logic
    }
    const summ = nums.reduce((sum, num) => + num + + sum);
    yield write('result-execute3.dat', `Result is ${summ}`);
};

execute(gen3());