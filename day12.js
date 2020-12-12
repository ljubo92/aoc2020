const data = require("fs").readFileSync("input.txt", "utf8");
let parsedInput = data.split(/\r\n/g).map(x => ({ key: x.charAt(0), value: parseInt(x.substring(1)) }))

let shipX = 0, shipY = 0, pointX = 10, pointY = 1;

rotate = (x) => {
    const tmp = pointX;
    if (x.value === 180) {
        pointX = -tmp
        pointY = -pointY
    }
    let dir = 1;
    if (x.key === 'L') dir = -1
    if (x.value === 90) {
        pointX = pointY * dir
        pointY = -tmp * dir
    } else if (x.value === 270) {
        pointX = -pointY * dir
        pointY = tmp * dir
    }
}
stepBoat = (x) => {
    shipX += (x * pointX)
    shipY += (x * pointY)
}

parsedInput.map(x => ((x.key === 'F') ? stepBoat(x.value) :
    (x.key === 'E') ? pointX += x.value :
        (x.key === 'S') ? pointY -= x.value :
            (x.key === 'W') ? pointX -= x.value :
                (x.key === 'N') ? pointY += x.value :
                    (x.key === 'R' || x.key === 'L') ? rotate(x) : 0))

console.log(Math.abs(shipX) + Math.abs(shipY))


