//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// primitive data types are called by reference
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++
// Stack(primitive data types), Heap(non-primitive)
// in Stack memory copy value (pass-by-value)is given, while in heap original(pass-by-reference) value is given

// primitive (Stack)
let Name = "abhishek";
let anotherName = Name;
anotherName = "abhi";

console.log(Name, anotherName);

// non-primitive (Heap)
let obj = {
  name: "Abhishek",
  age: 44,
};

let anotherObj = obj;
anotherObj.age = 67;

console.log("first object: ", obj);
console.log("second obj: ", anotherObj);
//  as seen string is stored in stack so changing the copy value doesn't affect original
// while in heap the reference is passed so changing other value changes original too
