const data = require("fs").readFileSync("input.txt", "utf8");
let parsedInput = data.split(/,/g).map(x=>parseInt(x));

for(var i = parsedInput.length; i<2020; i++){
    let last = parsedInput[parsedInput.length-1]
    parsedInput.pop();
    if(parsedInput.includes(last)){
        let index = parsedInput.lastIndexOf(last);
        parsedInput = [...parsedInput,last,i-1-index]
    }else{
        parsedInput = [...parsedInput,last,0]
    }
}
console.log(parsedInput[parsedInput.length-1]);

