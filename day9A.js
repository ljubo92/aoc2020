const data = require("fs").readFileSync("input.txt", "utf8");
const parsedInput = data.split(/\r\n/g).map(x => parseInt(x.split(" ")))

for (var i = 0; i < parsedInput.length - 25; i++) {
    var flag = false;
    for (var j = 0; j < parsedInput.length; j++) {
        for (var k = 1 + j; k < 25; k++) {
            let currentSum = parsedInput[i + j] + parsedInput[i + k];
            let target = parsedInput[i + 25]
            if (currentSum === target) {
                flag = true;
            }
        }
    }
    if (flag === false) {
        console.log(parsedInput[i + 25])
    }
}
