const data = require("fs").readFileSync("input.txt", "utf8");
const seatsMatrix = data.split(/\r\n/g).map(x => x.split(""));

let countSeats = (matrix) => matrix.reduce((cr, ar) => ar.reduce((c, a) => a === '#' ? c + 1 : c, cr), 0)
let compareTwoMatrixes = (a, b) => JSON.stringify(a) === JSON.stringify(b)

let directions = [[1, 1], [1, 0], [-1, -1], [0, -1], [1, -1], [-1, 0], [0, 1], [-1, 1]]

const countNeighbors = (m, seatRow, seatCol) => {
    let neighbors = 0;
    for (let k = 0; k < directions.length; k++) {
        let ii = seatRow;
        let jj = seatCol;
        for (let i = 0; i < m.length; i++) {
            ii += directions[k][0]
            jj += directions[k][1];
            if (ii < 0 || ii >= m.length) continue
            if (jj < 0 || jj >= m[0].length || (ii === seatRow && jj === seatCol)) continue
            if (m[ii][jj] === '#') {
                neighbors++;
                break;
            }
            if (m[ii][jj] === 'L') break
        }
    }
    return neighbors
}

const swapSeats = (matrix) => {
    let newMatrix = [...Array(matrix.length)].map(e => Array(matrix[0].length));
    for (let k = 0; k < matrix.length; k++) {
        for (let g = 0; g < matrix[0].length; g++) {
            if (matrix[k][g] === 'L' && countNeighbors(matrix, k, g) === 0) newMatrix[k][g] = '#';
            else if (matrix[k][g] === '#' && countNeighbors(matrix, k, g) >= 5) newMatrix[k][g] = 'L';
            else newMatrix[k][g] = matrix[k][g]
        }
    }
    if (compareTwoMatrixes(matrix, newMatrix)) return newMatrix
    return swapSeats(newMatrix)
}

const z = swapSeats(seatsMatrix);
console.log(countSeats(z))
