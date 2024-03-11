// how to change value of constant, ex change Math.PI (which is 3.14159...) to 3 or 4

// getOwnPropertyDescriptor(kiski_property, property_name)
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// when we print this line, it give serveral properties which are hard coded
// means it can't be change, if writtable: false, we can't overwrite it
// we can also do this in our own object too using defineProperty()
console.log(descripter);

Object.defineProperty(Math, "PI", {
    value: 3.141592653589793,
    writable: false, // Since Math.PI should not be modified
    enumerable: false, // Math.PI should not appear in for...in loops
    configurable: false, // Math.PI should not be deleted or have its attributes changed
});

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const coffee = {
    name: "ginger coffee",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("coffee nhi bani");
    },
};

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, "name", {
    //writable: false,
    enumerable: true, //iteration
});

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

// Object.entries() if Object is not iterable
for (let [key, value] of Object.entries(coffee)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}
