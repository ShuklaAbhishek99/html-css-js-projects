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

const sugar = new createUser("chai", 55); // this will know that other methods has been added
const tea = createUser("tea", 250); // this won't know about the new methods created

// one thing to note we don't need to write sugar.prototype.increment() everytime
// to access that method, we can directly write sugar.increment(),
// JS handles the prototype thing itself search the method you asked for
// same thing happens with Array.methods and String.methods
// there are prototypes under the prototype and it stretches under the hood
// but we have to write single name and not .method1().prototype.method2().prototype
// This is the nature of JS to dig deep, which is called as inheritance
// it won't stop until it finds the value or null(if no value is found)
// We need "new" which inject the method we defined (like printMe & increment),
// if 'new' is not used, then js won't know if you added new methods inside the function
// after adding new, it injects that to particular instance (who called it)
// methods accessing
sugar.increment();
sugar.printMe();

// below method call will print, can't read undefined increment and print
// tea.increment();
// tea.printMe();

// But one to note is, if we defined these methods inside the createUser function
// it will still give error if function (constructor) is called without 'new'

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

// ------------------------------------------------------------------------------
// we can use reserved object in js and mould them to our way
// It is found that all object methods (superior) methods are working with a function too
function Array(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.User = function () {
        console.log(
            `this is the user detail: ${this.username.length} :: ${this.email} :: ${this.password}`
        );
    };
}

const ArrayOne = new Array("Abhishek", "abhishek@gmail.com", "12345678");
console.log(ArrayOne.username);
console.log(ArrayOne.username.length);

const arr = new Array([1, 2, 3, 4, 5]);
console.log(arr);

function Testing(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.User = function () {
        console.log(
            `this is the user detail: ${this.username.length} :: ${this.email} :: ${this.password}`
        );
    };
}

const ArrayTwo = new Testing("Abhishek", "abhishek@gmail.com", "12345678");
console.log(ArrayTwo.username);
console.log(ArrayTwo.username.length);

// V: 43
