//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "abhishek";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "abhishek";
  if (username === "abhishek") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

// normally created function can be called before declaration and gives no error
console.log(addone(5));

function addone(num) {
  return num + 1;
}

// function stored in variable and called before declaration, gives error
addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
