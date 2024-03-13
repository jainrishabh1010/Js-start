// Math
// console.log(Math.random()); // ye humesha 0 and 1 ke bich ki values deti h 
// console.log(Math.random()*10);
// console.log(Math.random()*10 + 1);
// console.log(Math.floor(Math.random()*10) + 1); // to get only one value (single digit)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // +1 ki value zero na ho. + min isliye ki zero to nhi chahye lekin 10 se bhi kam nhi chahiye to jo result aayega () iske andar ka usme +min kar do.