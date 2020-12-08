const data = require("fs").readFileSync("input.txt", "utf8");
const parsedInput = data.split(/\n/g).map(x => x.replace(/contain|,/g, "").split(/bags|bag/g)).map(x => x.map(x => x.trim())).map(x => x.filter(x => x !== '.'))
let objects = parsedInput.map(x => ({
    bag: x[0],
    bags: x.slice(1).map(y => ({bag: y.split(" ").length === 3 ? y.substring(2) : y, amount: y.charAt(0) !== 'n' ? parseInt(y.charAt(0)) : 1,}))
}))

const someRecursion = (object, amount) => {
    if (!object) {
        return 0
    }
    if (object.bag === 'no other') {
        return amount;
    } else {
        return amount + amount * object.bags.map(y => someRecursion(objects.find(x => x.bag === y.bag), y.amount)).reduce((x, a) => x + a)
    }
}
let x = someRecursion(objects.find(x => x.bag === 'shiny gold'), 1)
console.log(x)
