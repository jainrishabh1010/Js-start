// Primitive

// 7 types- String, Number, Boolean, Null, Undefined, Symbol, BigInt.
let score = 100
let scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId);// false symbol aise hi hote hai ki hum agar andar same string bhi pass kar de to bhi ab vo unique hi honge 
const bigNumber = 34565434565445654n

// Reference (Non Primitive)

// Array, Objects, Functions.
const heros = ["shaltiman", "Jojo", "Krish"] // arrays
let myObj = {
    name: "Rishabh",
    age: 22
}   // object

const myFunction = function(){
    console.log("hello world");
}
// function

/* ************************************ */
// Stack memory, Heap memory
let myYoutubename = "code with harry"
let anotherName = myYoutubename
anotherName = "Code with rishabh"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl" 
}
let userTwo = userOne
// object ki value ko . laga ke direct access karte hai
userTwo.email = "maker@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);