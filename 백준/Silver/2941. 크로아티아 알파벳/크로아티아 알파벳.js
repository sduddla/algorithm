const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let str = input;
for(let pattern of croatia) {
    str = str.split(pattern).join('a');
}

console.log(str.length);