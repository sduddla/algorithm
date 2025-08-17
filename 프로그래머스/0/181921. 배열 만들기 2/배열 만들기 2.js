function solution(l, r) {
    let answer = [];
    for(let i=l; i<=r; i++) {
        if(String(i).split('').every(ch => ch === '0' || ch === '5')) {
            answer.push(i);
        }
    }
    return answer.length ? answer : [-1];
}