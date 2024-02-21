const user = {
  username: "abhishek",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    // => while accessing this, it gives object with all key its properties/key:value pairs
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// => this will give "empty object" in node environment, while in browser it will give "window object"
// console.log(this);

// function chai(){
//     let username = "abhishek"
//     console.log(this.username);
// }

// => this inside the function will give "global object"
// chai()

// const chai = function () {
//     let username = "abhishek"
//     console.log(this.username);
// }

const chai = () => {
  let username = "abhishek";
  console.log(this);
};

// chai()

// explicitly return (means have to include return)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "abhishek" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
