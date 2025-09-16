function solution(s) {
    
    let answer = 0;
    let n = s.length;
    
    for(let i = 0; i < n; i++) {
        const stack = [];
        
        let isCollect = true;
        for(let j = 0; j < n; j++) {
            const c = s[(i + j) % n];
            
            // 열린 괄호 push
            if(c === '[' || c === '(' || c === '{') {
                stack.push(c);
            } else {
                if(stack.length === 0) {
                    // 여는 괄호가 없을 경우
                    isCollect = false;
                    break;
                }
                // 닫힌 괄호 스택의 top과 짝이 맞는 비교
                const top = stack[stack.length - 1];
                if(c === ']' && top === '[') {
                    stack.pop();
                } else if(c === ')' && top === '(') {
                    stack.pop();
                } else if(c === '}' && top === '{') {
                    stack.pop();
                } else {
                    isCollect = false;
                    break;
                }
            }
        }
        
        if(isCollect && stack.length === 0) {
            answer += 1;
        }
    }
    
    return answer;
}