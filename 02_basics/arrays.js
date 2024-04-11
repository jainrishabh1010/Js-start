// const myArr = [1,2,3,4,5]
// console.log("A", myArr)
// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr)

// const myn2 = myArr.splice(1, 3)// this manipulate the original array 
// console.log("C", myArr);
// console.log(myn2);

// Next part
const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//console.log(marvel_heroes[3]);// push use kia to usne next vale array ko aisa element utha liya

// const allHeroes = marvel_heroes.concat(dc_heroes) // concate returns new array so we have to take a new array to store the result
// console.log(allHeroes);
 // but one more easy than this concate is spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
//console.log(all_new_heroes);
// ye isiliye bhi use karte h concate mai 1 hi ko concate kar sakte h lekin spread mai limit nhi h or hote to ... krke usko bhi kar sakte the 
const another_arr = [1,2,3,[4,5,6],7,[4,5]]
const real_another_arr = another_arr.flat(2)// yaha aap (infinity)bhi de sakte h but try ki real depth dede
console.log(real_another_arr);

// how we make a given thing array
// by using from operator
console.log(Array.from("Rishabh"));
console.log(Array.from({name: "Rishabh"}));// interesting it will give empty array you have to tell ki keys ka array banana h ya vakues ka 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
