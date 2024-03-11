// let myName = "abhishek     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    },
};

// everything goes to object at final, if we add anything to it, 
// it will be accesible by stings, arrays, functions
Object.prototype.abhishek = function () {
    console.log(`abhishek is present in all objects`);
};

Array.prototype.heyAbhishek = function () {
    console.log(`abhishek says hello`);
};

// power given to object accessible by all
// heroPower.abhishek() // object
// myHeros.abhishek() // array

// power given to array accessible only by array
// myHeros.heyAbhishek() // array
// heroPower.heyAbhishek() // object

// ++++++++++++++++ Inheritance ++++++++++++++

const User = {
    name: "coffee",
    email: "coffee@google.com",
};

const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false,
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport, // inheriting the property of TeachingSupport to this obj
};

// same inheritance with (.) property
Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "CoffeeWithCode     ";

// adding this property to trim
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"abhishek".trueLength();
"iceTea     ".trueLength();
