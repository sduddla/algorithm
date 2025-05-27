function solution(n) {
    let count = 0;
    
    for(let i=1; ; i++) {
        if(i % 3 === 0 || String(i).includes('3')) {
            continue;
        }
        count++;
        
        if(count === n) {
            return i;
        }
    }
    return i;
} 