const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

input.pop();

for(let i = 0; i < input.length; i++) {
    const reverseInput = input[i].split('').reverse().join('');
    console.log(input[i] === reverseInput ? 'yes' : 'no');
}