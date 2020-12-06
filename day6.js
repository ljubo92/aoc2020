const data = require("fs").readFileSync("input.txt", "utf8");
const parsedInput = data.split(/\r\n\r\n/g).map(x=> x.split(/\r\n/g));


const partA = parsedInput.map(x=> new Set(x).size).reduce((a,x)=>a+x);

let partB = 0
parsedInput.map(x=> [...x[0]].map(l=> x.every(e=> e.includes(l)) && partB++));

console.log(partA, partB)
