const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

if (a > b) {
    console.log('>');
} else if (a < b) {
    console.log('<');
} else {
    console.log('==');
}