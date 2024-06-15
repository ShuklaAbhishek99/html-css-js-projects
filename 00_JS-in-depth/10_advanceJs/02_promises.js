// promise creation
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is compelete");
        resolve();
    }, 1000);
});

// Promise consumption
promiseOne.then(function () {
    console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Abhishek", email: "abhishek@example.com" });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "abhishek", password: "123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

// when using then-catch chaining, we can't store the return values by them inside a variable
// although we can store the return value declaring a variable inside a block and use then-catch
// inside that block and store the value return
// but the whole concept is you can't store the value just writing a then() and take a value from it
// you need to do further chaining of then() or catch(), whatever your requirement is, and then
// return the value(s) you want to pass to the next

// so to do above functonality (storing the return(i.e. resolve or reject) inside a variable)
// we can use async-await, whatever returned by promise will be stored in the variable
// we need try-catch to handle both successful resolve and reject returned by promise
// if any error returned by promise, it wll move the control to catch
// if success the code will run inside try without any issue
async function consumePromiseFive() {
    try {
        // we are not cosuming promise like promiseFive() this, because promise is an object
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// below shows both of handling promise, either with then-catch or async-await
// fetch returns a promise that is either fulfilled or rejected

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         response.json() also takes some time to get converted, so we need to use await here too
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// in then-catch we don't need try-catch like things, because one will one pass to next
// either when it finished(in then) or got an error(in catch)

fetch("https://api.github.com/users/ShuklaAbhishek99")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));

// promise.all

// Imp Note: when you request data over fetch and it gives you HTTP errors like 404,
// it won't be considered as promise rejection, so it will be in then()
// read here: https://developer.mozilla.org/en-US/docs/Web/API/fetch
// https://developer.mozilla.org/en-US/docs/Web/API/fetch?highlight=%27A%20fetch()%20promise%20does%20not%20reject%20if%20the%20server%20responds%20with%20HTTP%20status%20codes%20that%20indicate%20errors%20(404,%20504,%20etc.).%20Instead,%20a%20then()%20handler%20must%20check%20the%20Response.ok%20and/or%20Response.status%20properties.%27#:~:text=A%20fetch()%20promise%20does%20not%20reject%20if%20the%20server%20responds%20with%20HTTP%20status%20codes%20that%20indicate%20errors%20(404%2C%20504%2C%20etc.).%20Instead%2C%20a%20then()%20handler%20must%20check%20the%20Response.ok%20and/or%20Response.status%20properties.
