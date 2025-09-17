const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);
const result = (a * b * c).toString(); // 곱셈 결과 -> 문자열

const count = new Array(10).fill(0);

for(let ch of result) {
    count[Number(ch)]++;
}

console.log(count.join('\n'));