function solution(topping) {
    
    let result = 0; // 공평하게 자르는 방법의 수
    
    const right = new Map();
    for(const t of topping) {
        right.set(t, (right.get(t) || 0) + 1);
    }
    
    const left = new Map();
    
    // 왼쪽으로 하나씩 옮기면서 비교
    for(let i = 0; i < topping.length - 1; i++) {
        const t = topping[i];
        
        // 오른쪽에서 하나 빼기
        right.set(t, right.get(t) - 1);
        if(right.get(t) === 0) right.delete(t); // 다 쓴 토핑 삭제
        
        // 왼쪽에 추가
        left.set(t, (left.get(t) || 0) + 1);
        
        if(left.size === right.size) result++;
    }
    return result;
}