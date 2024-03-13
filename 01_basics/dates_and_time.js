// Dates

let myDate = new Date() // yaha humne ek date ka object bana diya ek instance bana diya 
// console.log(myDate); // to know how instance look
// upper one readability thodi kam h to ab hum use thoda conversion kar readable banane ki koshis karenge 
// converting it into string 
// console.log(myDate.toString());// thoda readable hua h 
// some more methods
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// passing or creating our date
//let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")// this is yy-mm-dd format
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023")// this is mm-dd-yy format
// console.log(myCreatedDate.toLocaleString());

// geting time stamp
//let myCreatedDate = new Date("01-14-2023")
let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));// converting milisecs into seconds
//------------- basics complete ----------
// Now some more methods 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());