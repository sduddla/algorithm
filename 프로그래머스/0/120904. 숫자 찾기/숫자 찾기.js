function solution(num, k) {
    const a = num.toString().indexOf(k)+1;
    return a ? a : -1;
}