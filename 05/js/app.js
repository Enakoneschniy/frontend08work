'use strict';

console.log(x);

var x = 5; // deprecated
/*
многострочный
комментарий
 */
// alert(y);
let y = 5; // number
const z = 5.6; // number
let str = 'Hello world!'; // string
let str1 = "Hello world!"; // string
let str2 = `Hello


 world!`; // string

console.log(str2);

let isAuth = true; // true or false  - boolean

let c = null;

console.log(typeof isAuth);
console.log(typeof c);
let obj = {};

let d = 2 / 0;
console.log(d);

let array = [];

console.log(typeof array);

let userName = "Hello!";

let res = 5 + +'4';
console.log(res);

let foo = 3;
foo++; // 3
console.log(foo++); // 4
console.log(foo); // 5

foo += 5; // foo = foo + 5

console.log(4 % 3);

// let name = prompt('Input you name', '');
console.log(name);
// let num = prompt('Input number', '');
// console.log(parseFloat(num));

// let isReady = confirm('Are you ready?');
// console.log(isReady);
let a1 = 2;
let a2 = 4;
console.log(a2 > a1);

let age = parseFloat(prompt('Age', ''));
if (age < 18) {
    alert("Доступ запрещен!");
} else if (age === 21 && isAuth) {
    alert("Можно продать водку!");
} else {
    alert("Доступ разрешен!");
}

let baz = 5;

switch (baz) {
    case 4:
        console.log('case 4');
        console.log('case 4');
        break;
    case 5:
        console.log('case 5');
        break;
    case 6:
        console.log('case 6');
        break;
    default:
        console.log('default')
}

let login = 'admin';
let password = 'adminadmin';
let auth = (login === 'admin') ? 'login' : 'not login';

console.log(auth);








