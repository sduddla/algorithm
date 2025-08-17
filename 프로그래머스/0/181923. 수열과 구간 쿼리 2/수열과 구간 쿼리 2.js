function solution(arr, queries) {
    let result = [];
    
    for(let query of queries) {
        const [s, e, k] = query;
        let min = Infinity;
        
        for(let i=s; i<=e; i++) {
            if(arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        }
        
        result.push(min === Infinity ? -1 : min);
    }
    
    return result;
}