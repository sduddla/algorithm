const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ');

const a = BigInt(input[0]);
const b = BigInt(input[1]);

console.log((a + b).toString());