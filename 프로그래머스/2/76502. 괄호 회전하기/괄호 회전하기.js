function solution(s) {
    // 스택 사용
    // s 소괄호로 이루어진 문자열
    
    const n = s.length;
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        let stack = []; // 스택 만들기
        
        let isCorrect = true;
        
        for(let j = 0; j < n; j++) {
            const c = s[(i + j) % n]; // 회전
            
            if(c === '[' || c === '(' || c === '{') { // 열린 괄호라면
                stack.push(c); // 스택에 넣기
            } else {
                if(stack.length === 0) { // 열린 괄호가 없다면
                    isCorrect = false;
                    break;
                }
                
                const top = stack[stack.length - 1];
                if(c === ']' && top === '[') {
                    stack.pop();
                } else if(c === ')' && top === '(') {
                    stack.pop();
                } else if(c === '}' && top === '{') {
                    stack.pop();
                } else {
                    isCorrect = false;
                    break;
                } 
            }
        }
        
        // 모든 괄호의 짝 맞을 경우
        if(stack.length === 0 && isCorrect) {
            result += 1;
        }
    }
    
    return result;
}