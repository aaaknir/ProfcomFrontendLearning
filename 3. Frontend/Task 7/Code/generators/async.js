'use strict'

const fs = require('fs');

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
            resolve('writed');
        });
    });
}

const work = async function () {
    try {
        const list = await read('list_.dat');
    } catch (err) {
        console.error(err);
        return 'FAIL!';
    }
    const filenames = list.split('\n').map(name => name.trim()).filter(name => !!name);
    const nums = await Promise.all(filenames.map(filename => read(filename)));
    const summ = nums.reduce((sum, num) => + num + + sum);
    await write('result-async.dat', `Result is ${summ}`);
};

work()
    .then((r) => console.dir({r, fin:'FINISH!'}))
    .catch(console.error);