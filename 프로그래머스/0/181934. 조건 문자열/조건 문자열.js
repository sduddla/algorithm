function solution(ineq, eq, n, m) {
    if(ineq === '<' && n < m) return 1;
    if(ineq === '>' && n > m) return 1;
    if(eq === '=' && n === m) return 1;
    if(eq === '!' && n === m) return 1;
    return 0;
}