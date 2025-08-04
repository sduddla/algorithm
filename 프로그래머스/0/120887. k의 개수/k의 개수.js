function solution(i, j, k) {
    let count = 0;
    for(let n=i; n<=j; n++) {
        const str = String(n);
        for(let ch of str) {
            if(ch === String(k)) {
                count++;
            }
        }
    }
    return count;
}