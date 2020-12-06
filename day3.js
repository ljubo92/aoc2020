const data = require("fs").readFileSync("input.txt", "utf8");

var counter = 0
const input = data.split(/\r\n\r\n/g).map(x=> x.split(/\r\n/g)).map(x=> [...x[0]].map(l=> x.every(e=> e.includes(l)) && counter++))

console.log(counter)