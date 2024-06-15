// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`)
}

// Maps
// maps is just like object which holds key:value pairs, it will exist in the same
// order as it is inserted, and will always hold a unique key, if same key is pushed
// again it won't be added to the "map"
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);
// destructuring with map
for (const [key, value] of map) {
  console.log(key, ':-', value);
}

// arrays, maps, and strings are iterable in the way above, but not object
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }
const array = [1, 2, 8, 2, 54, 2, 4];

for(const item of array){
    console.log(item);
}