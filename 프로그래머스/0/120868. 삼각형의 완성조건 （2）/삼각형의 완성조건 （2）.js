function solution(sides) {
    let arr = sides.sort((a,b) => a-b);
    
    const max = arr[1];
    const min = arr[0];
    
    let count = 0;
    
    for(let i=max-min+1; i<=max; i++) {
        count++;
    }
    
    for(let i=max+1; i<max+min; i++) {
        count++;
    }
    
    return count;
}