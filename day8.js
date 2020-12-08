const data = require("fs").readFileSync("input.txt", "utf8");
const parsedInput = data.split(/\r\n/g).map(x => x.split(" "))

const fun = (programCode) => {
    let visited = new Set()
    let acc = 0;

    for (var i = 0; i < programCode.length; i++) {
        let current = programCode[i][0];
        let argument = parseInt(programCode[i][1]);

        if (visited.has(i)) {
            break;
        } else {
            visited.add(i)
        }
        if (current === 'acc') {
            acc += argument;
        }
        if (current === 'jmp') {
            i += (argument - 1);
        }
        if (i === programCode.length - 1) {
            return acc;
        }
    }
    return
}

for (var j = 0; j < parsedInput.length; j++) {
    const a = [...parsedInput];
    const temp = a[j][0];
    a[j][0] = 'nop';
    if (fun(a)) {
        console.log(fun(a))
    }
    parsedInput[j][0] = temp
}
