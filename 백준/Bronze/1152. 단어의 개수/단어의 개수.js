const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let result = input[0] === '' ? 0 : input.length;
console.log(result);

