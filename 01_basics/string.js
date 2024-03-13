const name = "Rishabh"
const repoCount = 50

//console.log(name + repoCount) // + --> concatenate
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rishabh-Jn-com')
console.log(gameName);
console.log(gameName[0]);// key value 
console.log(gameName.__proto__);// prototype ko access ... one of the type

console.log(gameName.length);
console.log(gameName.toUpperCase());
// one more method hume dekhna h ki konsi  position par konsa char  h 
console.log(gameName.charAt(4));
// ab iska ulta ki konsa char konsi position par h 
console.log(gameName.indexOf('h'));

// to remove start and end spaces
const newStringOne = "  Rishabh  "
//console.log(newStringOne);
console.log(newStringOne.trim());// this remove both starting and end spaces
console.log(newStringOne.trimEnd());// this remove only end spaces
console.log(newStringOne.trimStart());// this remove only start spaces
// to replace something
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.replace('choudhary', 'jain'));
// converting strng into array
console.log(gameName.split('-'));// this gives an array which has three strings in it
