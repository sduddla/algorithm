function solution(n) {
    let a = Math.sqrt(n);
    
    if (Number.isInteger(a)) return (a + 1) * (a + 1);
    else return -1;
}