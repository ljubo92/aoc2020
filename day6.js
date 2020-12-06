const data = require("fs").readFileSync("input.txt", "utf8");
const parsedInput = data.split(/\r\n\r\n/g).map(x=> x.split(/\r\n/g));

//
const partA = parsedInput.map(x=> new Set(x).size).reduce((a,x)=>a+x);
//
var partBCounter = 0
parsedInput.map(x=> [...x[0]].map(l=> x.every(e=> e.includes(l)) && partBCounter++));
//
console.log(partA, partB)