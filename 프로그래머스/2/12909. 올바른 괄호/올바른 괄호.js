function solution(s){
    const stack = [];
    
    for(let c of s) {
        if(c === '(') {
            stack.push(c);
        } else if(c === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}