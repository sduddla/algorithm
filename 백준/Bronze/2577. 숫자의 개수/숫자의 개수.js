const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

const result = (a * b * c).toString();

const arr = new Array(10).fill(0);

for(let ch of result) {
    arr[Number(ch)]++;
}

console.log(arr.join('\n'));