const fs = require('fs');
let s = fs.readFileSync(0).toString().trim();

s = s.toUpperCase(); // 대문자로 통일
let freq = {}; 
for(let i = 0; i < s.length; i++) { 
    let ch = s[i]; 
    if(freq[ch]) { 
        freq[ch]++; 
    } else {
        freq[ch] = 1;
    }
}

let answer = '?';
let max = 0;

for(let ch in freq) {
    if(freq[ch] > max) {
        max = freq[ch];
        answer = ch;
    } else if(freq[ch] === max) {
        answer = '?';
    }
}

console.log(answer);
