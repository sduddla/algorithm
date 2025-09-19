const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// n가지 종류의 동전, 동전 가치는 오름차순
// 목표 금액 k, 동전 개수 최소로 쓰는 방법
// 조건: 동전 단위가 항상 배수 관계

// 큰 동전부터 사용
// 해당 동전 최대한 사용, 남은 금액으로
// 이 과정 반복 -> 항상 최소 개수

const [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number);

let cnt = 0;
let money = k;

// 큰 동전부터 사용
for(let i = n-1; i >= 0; i--) {
    if(coins[i] <= money) {
        cnt += Math.floor(money / coins[i]); // 해당 동전 개수
        money %= coins[i]; // 남은 금액
    }
}
console.log(cnt);

