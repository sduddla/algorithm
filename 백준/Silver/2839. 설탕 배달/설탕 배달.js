const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let n = Number(input);
let cnt = 0;

while(n >= 0) {
    if(n % 5 === 0) {
        cnt += Math.floor(n / 5);
        console.log(cnt);
        return;
    }
    n -= 3;
    cnt++;
}
console.log(-1);
