const user = {
    username: "abhishek",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    },
};

// inside an object 'this' is the object, which is current context
// in global scope, 'this' is an empty object, console.log(this)
// inside browser we have lots of things in current context, but in node environment
// we don't such web like (web api) we have very few things almost nothing
// node runtime env is taken from browser so this behaviour occurs

// inside the function we get a global object which store somes values, like fetch, clearTimeInterval, etc.
// all these are taken from web api to the node environment
function newFunc() {
    console.log("HERE IS THE FUNCTION THIS");
    console.log(this);
    console.log("HERE FUNCTION THIS ENDS");
}

newFunc();

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    };

    return this;
}

// if "new" keyword is not used it will overwrite the same value
// here in above function "this" refers to an empty object, where all values are getting added
// when passing new values with another function call "this" is getting overwritten
// In function "this" refers to global object (which is non-empty)
// thats why if we don't return this, it will still update the value
// that is also called implicitly defined "this"
// while inside an object "this" refers to current context (which is object itself)
const userOne = new User("abhishek", 12, true);
const userTwo = new User("CodewithCoffee", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);

// About "new" Keyword
// step 1: when we use 'new' and empty object({}) gets generated
// step 2: now a constructor function is called and it takes all the arguments pack it inside the object(which was empty)
// step 3: After all argument injection, it is returned to the variable/memory where you want it to be stored
