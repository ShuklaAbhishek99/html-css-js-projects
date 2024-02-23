function multipleBy5(num) {
    return num * 5;
}

// every function has its own "this"

// as everything is object in JS so this work without any difficulty
multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
// give empty prototype
console.log(multipleBy5.prototype);
// console.log(
//     `Returns funciton as string => ${multipleBy5.toString()} ${"\n"} Type: ${typeof multipleBy5.toString()}`
// );

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// prototype == this, in context of that function
// this ne bulaya hai toh jisne bulaya hai uska value increment kar do
createUser.prototype.increment = function () {
    this.score++;
};

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
};

const sugar = new createUser("chai", 55);
const tea = createUser("tea", 250);

// one thing to note we don't need to write sugar.prototype.increment() everytime
// to access that method, we can directly write sugar.increment(),
// JS handles the prototype thing itself search the method you asked for
// same thing happens with Array.methods and String.methods
// there are prototypes under the prototype and it stretches under the hood
// but we have to write single name and not .method1().prototype.method2().prototype
// This is the nature of JS to dig deep, which is called as inheritance
// if won't stop until it finds the value or null(if no value is found)
// We need "new" which inject the method we defined, after adding new, it injects that
// to particular instance
// methods accessing
sugar.increment();
sugar.printMe();

/*

Here's what happens behind the scenes when the "new" keyword is used:

A "new" object is created: The "new" keyword initiates the creation of 
a "new" JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype 
property of the constructor function. This means that it has access to properties 
and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified 
arguments and this is bound to the newly created object. If no explicit return value 
is specified from the constructor, JavaScript assumes this, the newly created object, 
to be the intended return value.

The "new" object is returned: After the constructor function has been called, if it 
doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/
