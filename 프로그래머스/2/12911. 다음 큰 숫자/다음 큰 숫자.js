function solution(n) {
    let next = n + 1;
    
    let target = n.toString(2).split('').filter((item) => item === '1').length;
    while(true) {
        const count = next.toString(2).split('').filter((item) => item === '1').length;
        if (target === count) {
            return next;
        }
        next++;
    }
}