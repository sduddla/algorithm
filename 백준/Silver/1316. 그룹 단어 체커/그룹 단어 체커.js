const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let cnt = 0;

for(let i = 1; i <=n; i++) {
    const word = input[i];
    let used = []; // 나온 글자
    let result = true;
    
    for(let j = 0; j < word.length; j++) {
        const ch = word[j];
        
        if(j > 0 && ch !== word[j - 1] && used.includes(ch)) { // 이전 글자와 다르고, 이미 등장한 적 있으면 실패
            result = false;
            break;
        }
        
        if(!used.includes(ch)) used.push(ch);
    }
    if(result) cnt++;
}

console.log(cnt);