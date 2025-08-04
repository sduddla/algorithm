function solution(lines) {
    const points = {};
    
    for(let [start, end] of lines) {
        for(let i=start; i<end; i++) {
            points[i] = (points[i] || 0) + 1;
        }
    }
    
    let count = 0;
    for(let key in points) {
        if(points[key] >= 2) count++;
    }
    
    return count;
}
