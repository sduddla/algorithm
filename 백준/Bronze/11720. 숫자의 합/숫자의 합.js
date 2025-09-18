const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
let str = input[1];
let sum = 0;

for(let i = 0; i < n; i++) {
    sum += Number(str[i]);
}

console.log(sum);