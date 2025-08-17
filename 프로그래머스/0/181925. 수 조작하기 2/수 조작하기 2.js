function solution(numLog) {
    let result = '';
    
    for(let i=0; i<numLog.length; i++) {
        const a = numLog[i] - numLog[i-1];
        
        if(a === 1) {
            result += 'w';
        } else if(a === -1) {
            result += 's';
        } else if(a === 10) {
            result += 'd';
        } else if(a === -10) {
            result += 'a';
        }
    }
    return result;
}