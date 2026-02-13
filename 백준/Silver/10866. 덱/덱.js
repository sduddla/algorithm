const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);

let size = 20000;
let dq = new Array(size);
let head = Math.floor(size / 2);
let tail = head;

let result = [];

for(let i = 1; i <= N; i++) {
    const [cmd, x] = input[i].split(' ');
    
    switch (cmd) {
        case 'push_front':
            dq[--head] = x;
            break;
        case 'push_back':
            dq[tail++] = x;
            break;
        case 'pop_front':
            if (head === tail) result.push(-1);
            else result.push(dq[head++]);
            break;
        case 'pop_back':
            if (head === tail) result.push(-1);
            else result.push(dq[--tail]);
            break;
        case 'size':
            result.push(tail - head);
            break;
        case 'empty':
            result.push(head === tail ? 1 : 0);
            break;
        case 'front':
            result.push(head === tail ? -1 : dq[head]);
            break;
        case 'back':
            result.push(head === tail ? -1 : dq[tail - 1]);
            break;
    }
}

console.log(result.join('\n'));