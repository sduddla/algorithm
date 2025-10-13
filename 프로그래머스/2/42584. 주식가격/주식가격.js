function solution(prices) {
    // prices 초 단위로 기록된 주식가격이 담긴 배열
    // 스택 사용
    
    const n = prices.length;
    const result = new Array(n).fill(0); // 가격 떨어지지 않은 기간 저장할 배열
    
    // 이전 가격과 현재 가격 비교
    const stack = [];
    stack.push(0);
    
    for(let i = 1; i < n; i++) {
        while(stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            // 가격이 떨어졌으므로 pop하고 기간 계산
            const j = stack.pop();
            result[j] = i - j; // 현재 시점 - 저장된 시점
        }
        // 안 떨어졌다면 push
        stack.push(i);
    }
    
    // 끝까지 가격이 떨어지지 않은 경우
    while(stack.length > 0) {
        const j = stack.pop();
        result[j] = n - 1 - j;
    }
    
    return result;
}