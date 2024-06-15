class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // when using get-set, one can't work without another, so get-set should be used
    // together inside a class, it can't just a get method and no set
    get email() {
        // this makes completly new variable whose 
        // value gets overwritten to constructor
        // to avoid conflict of who will set the variable and
        // stop memory stack overflow
        return this._email.toUpperCase();
    }
    set email(value) {
        // this makes completly new variable whose 
        // value gets overwritten to constructor
        // to avoid conflict of who will set the variable and
        // stop memory stack overflow
        this._email = value;
    }

    get password() {
        // this makes completly new variable whose 
        // value gets overwritten to constructor
        // to avoid conflict of who will set the variable and
        // stop memory stack overflow
        return `${this._password}abhishek`;
    }

    set password(value) {
        // this makes completly new variable whose 
        // value gets overwritten to constructor
        // to avoid conflict of who will set the variable and
        // stop memory stack overflow
        this._password = value;
    }
}

const abhishek = new User("a@abhishek.xyz", "abc");
console.log(abhishek.email);
// console.log(abhishek._email);
abhishek.email = ('gtx@gta.com')
console.log(abhishek.email);
