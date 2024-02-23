class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        // this is just like call(), using super() will take 
        // the reference from extended class
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const coffee = new Teacher("coffee", "coffee@teacher.com", "123");
coffee.logMe();

const masalaChai = new User("coffeeMocha");
masalaChai.logMe();

console.log(coffee instanceof User);
console.log(masalaChai instanceof Teacher);
