function solution(num, total) {
    // total = num * x + (num * (num - 1)) / 2;
    
    let start = (total - (num * (num - 1)) / 2) / num;
    let result = [];
    
    for(let i=0; i<num; i++) {
        result.push(start + i);
    }
    return result;
}