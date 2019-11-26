"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genID() {
    var options = {
        '0': function () {
            return ['b', 'n', 'z'][Math.round(Math.random() * 2)];
        },
        '1': function () {
            return ['c', 'p', '0'][Math.round(Math.random() * 2)];
        },
        '2': function () {
            return ['d', 'q', '1'][Math.round(Math.random() * 2)];
        },
        '3': function () {
            return ['f', 'r', '3'][Math.round(Math.random() * 2)];
        },
        '4': function () {
            return ['g', 's', '4'][Math.round(Math.random() * 2)];
        },
        '5': function () {
            return ['h', 't', '5'][Math.round(Math.random() * 2)];
        },
        '6': function () {
            return ['j', 'v', '6'][Math.round(Math.random() * 2)];
        },
        '7': function () {
            return ['k', 'w', '7'][Math.round(Math.random() * 2)];
        },
        '8': function () {
            return ['l', 'x', '8'][Math.round(Math.random() * 2)];
        },
        '9': function () {
            return ['m', 'y', '9'][Math.round(Math.random() * 2)];
        },
    };
    var value = new Date().getTime().toString(10);
    var id = '';
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var char = value_1[_i];
        Math.round(Math.random()) === 0 ? (id += options[char]().toUpperCase()) : (id += options[char]());
    }
    return id
        .split('')
        .reverse()
        .join('');
}
exports.genID = genID;
function main() {
    var passwordArray = [];
    var startDate = Number(new Date());
    for (var i = 0; i < 25000; i++) {
        var password = genID();
        if (passwordArray.indexOf(password) !== -1) {
            console.log('Password Duplicated');
        }
        passwordArray.push(password);
    }
    console.log((Number(new Date()) - startDate) / 1000 + " seconds");
}
main();
