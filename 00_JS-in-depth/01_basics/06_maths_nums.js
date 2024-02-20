const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// how many digits after (.)point
// console.log(balance.toFixed(1));

const otherNumber = 123.8966;

// how many digits of precise value
// ex = for 3 (124), for 4 (123.9), etc
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// gives in 10,00, 000
// change parameters for values to different like here in Indian counting/numeral system
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
