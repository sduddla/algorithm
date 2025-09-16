function solution(s)
{
    const stack = [];
    
    for(let c of s) {
        // 스택이 비어있지 않고, 현재 문자와 스택 맨 위 문자가 같을 경우
        if(stack.length > 0 && stack[stack.length - 1] === c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}