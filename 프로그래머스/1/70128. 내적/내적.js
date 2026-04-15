function solution(a, b) {
    // return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
    let sum = 0;
    
    for(let i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }
    return sum;
}