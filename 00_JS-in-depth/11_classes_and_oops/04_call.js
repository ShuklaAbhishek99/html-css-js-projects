function SetUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    // without .call in below contructor, it is just a reference not a call
    // so .call will tell to explicitly call that function
    // technically it is called but not exectued as expected
    // explicitly telling SetUsername() function to use my "this" (who has called), not its
    // without passing 'this' the variables inside SetUsername will be deleted after execution
    // as it will store the username values its variable not to the one who called it
    // so with 'call' and 'this' it tells to use my variable
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
