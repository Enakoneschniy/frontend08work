'use strict';
let num = 1;

while (num <= 10) {
    console.log(num++);
}
console.log('-----------------');

// num = 1;
do {
    console.log(num++);
} while(num <= 10);

let x;
let y;

/*do {
    x = parseFloat(prompt('input x', ''));
} while (isNaN(x));*/
/*do {
    y = parseFloat(prompt('input y', ''));
} while (isNaN(y));*/

//alert(x + y);
console.log('-----------------');
while (true) {
    let x = Math.round(Math.random() * 10);
    console.log(x);
    if(x < 6) {
        break;
    }
}
console.log('-----------------');
let n = 0;

while(n <= 10) {
    if (n % 2 === 0) {
        n++;
        continue;
    }
    console.log(n++);
}

console.log('-----------------');

for(let n = 0; n <= 10; n++) {
    console.log(n);
}

console.log('-----------------');

for(let n = 0, a = 0; n <= 10; n++, a += 2) {
    console.log(n, a);
}
console.log('-----------------');
for(let i = 1; i < 5; i++) {
    console.log(`&#${i};`);
}
let sum = 0;
for(let i = 1; i < 3; i++) {
    sum += i;
}
console.log(sum);

console.log('-----------------');

const arrNumbers = [1, 2, 3, 4, 5];
console.log(arrNumbers);
console.log(arrNumbers[1]);

const array = [];
for(let i = 0; i < 5; i++) {
    array[i] = Math.round(Math.random() * 10);
}
console.log(array);



