function solution(s) {
    let result = [];
    
    for(let a of s) {
        if(s.indexOf(a) === s.lastIndexOf(a)) {
            result.push(a);
        }
    }
    return result.sort().join('');
}