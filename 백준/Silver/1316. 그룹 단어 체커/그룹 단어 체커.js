const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
let cnt = 0; // 그룹 단어 개수 세기

for(let i = 1; i <= n; i++) {
    let word = input[i]; // 검사할 단어
    let used = []; // 사용
    let result = true;
    
    for(let j = 0; j < word.length; j++) { // 왼쪽부터 검사
        let ch = word[j]; // 글자
        
        // 첫 글자 비교대상 x
        // 연속된 글자 -> 새로 시작
        // 사용된 글자
        if(j > 0 && ch !== word[j - 1] && used.includes(ch)) {
            result = false;
            break;
        }
        
        if(!used.includes(ch)) used.push(ch);
    }
    
    if(result) cnt++;
}

console.log(cnt);