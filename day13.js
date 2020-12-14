const data = require("fs").readFileSync("input.txt", "utf8");
let parsedInput = data.split(/,/g).map(x => x !== 'x' ? parseInt(x) : x)
let N = parsedInput.filter(x => x !== 'x').reduce((c, a) => c * a)

const gcd = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;
  if (a === b) return a
  if (a > b) return gcd(a - b, b)
  else return gcd(a, b - a)
}
const eulerFi = (n) => {
  return new Array(n).fill().map((x, i) => gcd(n, i)).filter(y => y === 1).length
}
const b_i = (ni) => {
  return BigInt(N / ni) ** BigInt(eulerFi(ni) - 1) % BigInt(ni)
}
totFun = () => {
  sum = BigInt(0)
  let i = 0;
  for(let x of parsedInput){
    if(x !== 'x'){
      sum += BigInt(((x-i) % x)) * b_i(x) * BigInt(N/x)
    }
    i++;
  }
  return Number(sum % BigInt(N))
}

console.log(totFun())
