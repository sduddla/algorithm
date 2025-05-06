function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    for(let [a, b] of sizes) {
        const w = Math.max(a, b);
        const h = Math.min(a, b);
        
        if(w > maxW) maxW = w;
        if(h > maxH) maxH = h;
    }
    
    return maxW * maxH;
}