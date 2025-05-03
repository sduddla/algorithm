function solution(array, commands) {
    let result = [];
    
    for(let i=0; i<commands.length; i++) {
        const[start, end, k] = commands[i];
        const data = array.slice(start-1, end).sort((a,b) => a-b)[k-1];
        result.push(data);
    }
    return result;
}