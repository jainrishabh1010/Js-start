// singleton
Object.create

// Object literals\
const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    [mySym]: "myKey1",
    location: "Jaipur",
    email: "hiitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// accessing objects
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
JsUser.email = "kavi@gmail.com" // to overwrite values or we say simpli change the value 
// console.log(JsUser.email);
// Object.freeze(JsUser) // when we want ki ab isme kuch changes na hoo
JsUser.age = 21
// console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello JS User");
}
// console.log(JsUser.greeting); // just for understanding ki kya aata  h
console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greetingTwo());