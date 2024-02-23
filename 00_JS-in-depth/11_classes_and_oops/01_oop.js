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
// In function "this" refers to global object
// thats why if we don't return this, it will still update the value
// that is also called implicitly defined "this"
// while inside an object "this" refers to current context (which is object itself)
const userOne = new User("abhishek", 12, true);
const userTwo = new User("CodewithCoffee", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);
