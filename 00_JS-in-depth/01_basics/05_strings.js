const name = "abhishek";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("abhishek-as-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

// -ve values if given will be ignored and take it as 0
const newString = gameName.substring(0, 4);
console.log(newString);
// -ve values here will work and starts from backwards
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   abhishek    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhishek%20shukla";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
