function solution(arr) {
    let result = [];
    
    for(let i of arr) {
        for(let j = 0; j < i; j++) {
            result.push(i);
        }
    }
    return result;
}