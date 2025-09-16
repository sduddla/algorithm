function solution(n, left, right) {
    
    const result = [];
    
    for(let i = left; i <= right; i++) {
        let row = Math.floor(i / n);
        let col = i % n;
        
        result.push(Math.max(row, col) + 1);
    }
    return result;
}