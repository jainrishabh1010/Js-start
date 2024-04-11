// singleton
Object.create

// Object literals
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "hiitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// accessing objects
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
