const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let testCase = Number(input[0]);
let result = [];

for(let i = 1; i <= testCase; i++) {
    let [R, S] = input[i].split(' ');
    R = Number(R);
    
    let repeated = '';
    for(let ch of S) {
        repeated += ch.repeat(R);
    }
    
    result.push(repeated);
}

console.log(result.join('\n'));