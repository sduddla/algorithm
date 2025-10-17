const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

let result = 0;
let recentEnd = 0;

const num = input.shift(); // 첫째 줄 회의의 수 제거

// 각 회의 [시작, 끝] 숫자로 변환
const meet = input.map((v) => v.split(' ').map(Number));

meet.sort((a, b) => {
    // 끝나는 시간 같으면 시작 시간 빠른 순
    // 끝나는 시간 기준 정렬
    if(a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
})

for(let i = 0; i < meet.length; i++) {
    const [start, end] = meet[i];
    
    if(start >= recentEnd) {
        recentEnd = end;
        result++;
    }
}
console.log(result);