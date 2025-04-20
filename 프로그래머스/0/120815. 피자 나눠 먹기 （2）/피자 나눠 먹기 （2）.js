function solution(n) {
    let a = 1;
    
    while((a * 6) % n !== 0) {
        a++;
    }
    return a;
}