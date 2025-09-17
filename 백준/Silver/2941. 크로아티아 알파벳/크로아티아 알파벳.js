const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let str = input;
for(let pattern of arr) {
    str = str.split(pattern).join('X');
}

console.log(str.length);
