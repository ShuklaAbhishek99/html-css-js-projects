// singleton
// Object.create => through this method singleton is made

// object literals, no singleton is made through this method

// declaring symbol and using it inside the object as key, and printing it the same way
const mySym = Symbol("key1");

// keys are always treated as strings in object, so we don't need to write it inside the quotes
const JsUser = {
  name: "Abhishek",
  "full name": "Abhishek Shukla",
  //   this is how to refer the symbol, if not written inside brackets it will be treated as normal string
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "Abhishek@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Abhishek@chatgpt.com";
// Object.freeze(JsUser) => this method freezes the population or propagation of object that is provided
JsUser.email = "Abhishek@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
