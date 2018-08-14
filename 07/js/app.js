'use strict';

let arrNumbers = [1, 2, 3, 4, 5, 6];

for(let index = 0; index < arrNumbers.length; index++) {
    arrNumbers[index] *= 2;
    console.log(arrNumbers[index]);
}

console.log(arrNumbers);
console.log('---------------------');
arrNumbers = [1, 2, 3, 4, 5, 6];

for(let index in arrNumbers) {
    arrNumbers[index] *= 2;
    console.log(arrNumbers[index]);
}

console.log(arrNumbers);
console.log('---------------------');
arrNumbers = [1, 2, 3, 4, 5, 6];

for(let element of arrNumbers) {
    element *= 2;
    console.log(element);
}
console.log(arrNumbers);
console.log('======================');


let rndArray = [];
let count = 10;

for (let c = count; c > 0; c--) {
    rndArray.push(Math.round(Math.random() * 10));
}

console.log(rndArray);

rndArray.pop();

console.log(rndArray);

rndArray.shift();

console.log(rndArray);

rndArray.unshift(Math.round(Math.random() * 10));

console.log(rndArray);

rndArray = rndArray.concat(1222222, 24, 464, [2, 3, 4, 5, 6, 7]);

console.log(rndArray);

// rndArray.length = rndArray.length - 1;
// rndArray.length = 0;

rndArray = rndArray.slice(0, rndArray.length - 1);

console.log(rndArray);

rndArray = rndArray.slice(1);

console.log(rndArray);

rndArray = [].concat(rndArray.slice(0, 4), rndArray.slice(5));
console.log(rndArray);

rndArray.splice(0, 3, ...[233, 35, 567, 464, 4645]);

console.log(rndArray);

let test = [1, 2, 3, 34, 65, 456];
let [ a, b, c, ...x ] = test;

console.log(a, b, c, x);

let [ n, m ] = [34, 54];

console.log('-------------------------');

function random(min = 0, max = 100) {
    return Math.round(Math.random() * (max - min) + min);
}

let num = random(-100, 100, 345647);
console.log(num);


function sum() {
    let sum = 0;
    for (let index in arguments) {
        sum += arguments[index];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4));

const foo = function () {
    console.log('foo');
};

foo();

// foo = 'asdas';

const bar = () => console.log('foo');

const pow2 = n => n ** 2;

// const random = (min = 0, max = 100) => Math.round(Math.random() * (max - min) + min);


function f1(a) {
    return function (b) {
        console.log(a + b);
    }
}
const f3 = a => b => a + b;

function test1(a, callback) {
    callback(a);
}
test1(4, function (a) {
    console.log(a * 2);
});
test1(4, a => console.log(a * 2));

/*const f2 = f1();
f2();*/

let array = [1, 2, 3, 4];

/*array = array.map(function (el, index) {
    return el ** 2;
});*/

//array = array.map(el => el ** 2);
array = array.map(pow2);

console.log(array);







