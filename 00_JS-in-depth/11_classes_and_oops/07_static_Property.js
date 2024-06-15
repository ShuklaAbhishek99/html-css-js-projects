class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }
    
    // making private functions, can be accessed only inside the same class
    static createId() {
        return `123`;
    }
}

const abhishek = new User("abhishek");
// console.log(abhishek.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId());
