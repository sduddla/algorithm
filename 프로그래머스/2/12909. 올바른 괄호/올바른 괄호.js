function solution(s){
    const stack = [];
    
    for(const c of s) {
        if(c === '(') {
            stack.push ('(');
        } else if (c === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}
