const data = require("fs").readFileSync("input.txt", "utf8");
let parsedInput = data.split(/(?=mask)/g).map(x => x.split(/\r\n/g)).map(x => x.map(y => y.split("="))).map(x => x.map((y, j) => y.map((h, i) => (i === 1 && j !== 0) ? parseInt(h.trim()) : h.trim())))
let z = parsedInput.map(x => x.map(y => y.map(h => h.toString(2))))
let r = z.map(k => k.map(g => g.map(r => r.includes("mem") ? parseInt(r.replace(/\[|\]|mem/g, "")) : r))).map(b => b.filter(l => l[0] !== ''))

let storage = {}
let allBinaryCombos = []
const transform = (mask, input, valueToSet) => {
    let newInput = "00000000000000000000000000000000000000" + input.toString(2);
    let res = [...[...mask].map((x, i) => mask[mask.length - i - 1] === '0' ? newInput[newInput.length - i - 1] : mask[mask.length - i - 1] === '1' ? 1 : mask[mask.length - i - 1] === 'X' ? 'X' :0).toString().replace(/,/g, "")].reverse().toString().replace(/,/g, "")
    findCombinations(res);
    let counter =0;
    for(var i = 0; i< allBinaryCombos.length; i++){
        let b = [...res].map(x=> x === 'X' ? allBinaryCombos[i][counter++] : x);
        counter = 0;
        let r = b.toString().replace(/,/g,"");
        storage[r] = parseInt(valueToSet,2)
    }
    allBinaryCombos = []
    return parseInt(res, 2);
}

generateAllBinaryStrings = (n, arr, i) => {
    if (i == n) { 
        allBinaryCombos.push([...arr])
        return;
    }
    arr[i] = 0;
    generateAllBinaryStrings(n, arr, i + 1);
    arr[i] = 1;
    generateAllBinaryStrings(n, arr, i + 1);
}

const findCombinations = (binaryNumber) => {
    let amount = [...binaryNumber].filter(x => x === 'X').length;
    generateAllBinaryStrings(amount, [], 0);
}

r.map((x, j) => x.map((y, i, arr) => i !== 0 ? transform(arr[0][1], y[0],y[1]) : 0))
let sum = 0;
for (const value in storage) {
    sum += storage[value]
}
console.log(sum);
