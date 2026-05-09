function solution(d, budget) {
    // 최대한 많은 부서의 물품 구매
    
    // [1,3,2,5,4]
    d.sort((a, b) => a - b); // [1,2,3,4,5]
    
    let sum = 0;
    let count = 0;
    
    for(let i = 0; i < d.length; i++) {
        sum += d[i];
        
        if (sum > budget) {
            break;
        }
        count++;
    }
    
    return count;
}