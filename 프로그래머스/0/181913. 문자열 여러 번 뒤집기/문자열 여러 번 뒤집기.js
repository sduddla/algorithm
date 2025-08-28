function solution(my_string, queries) {
    let arr = my_string.split('');
    
    for(let i=0; i<queries.length; i++) {
        const [start, end] = queries[i];
        
        const reverseR = arr.slice(start, end+1);
        reverseR.reverse();
        
        arr.splice(start, reverseR.length, ...reverseR);
    }
    return arr.join('');
}