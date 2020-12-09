const data = require("fs").readFileSync("input.txt", "utf8");
const parsedInput = data.split(/\r\n/g).map(x => parseInt(x.split(" ")))

var sum =0;
for (var i = 0; i < parsedInput.length ; i++) {
    var flag = false;
    sum = parsedInput[i];
    var set = [sum]
    for (var j = i+1; j < parsedInput.length; j++) {
        let currentNumber = parsedInput[j]
            sum +=  currentNumber
            set.push(currentNumber)
          if(sum === 69316178){
            flag = true;
            break;
          }
    }
    if(flag){
        break;
    }
}
if(flag){
    console.log(Math.min(...set)+Math.max(...set))
}
