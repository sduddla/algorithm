function solution(n) {
    let nArr = String(n).split('');
    nArr.sort((a, b) => b - a);
    return Number(nArr.join(''));
}