// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123ab"
tinderUser.name = "Rishabh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sonak@gmail.com",
    fullname: {
        userFullname: {
        firstname: "Sonakshi",
        Lastname: "jain"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2} // this give that output jo vo array mai aa raha tha array ke andar array hume vo nhi chahiye
//console.log(obj3);
// one more way but this will not give the desire output 
// const obj3 = Object.assign(obj1, obj2)
//console.log(obj3);
//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);
// above is about assign hum ise bhi kam hi use karenge hum use karenge niche vali cheez(spread operator)
obj3 = {...obj1, ...obj2}
//console.log(obj3);

// Whenever values comes from database
const users = [
    {
        id: 1,
        email: "rish@gmil.co"
    },
    {
        id: 2,
        email: "hish@gmil.co"
    },
    {
        id: 3,
        email: "girish@gmil.co"
    },

] 
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// kisi property ko use karne ke pehle try this method to ensure it has that property or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));