function solution(ingredient) {
    // 1 빵
    // 2 야채
    // 3 고기
    // 1 2 3 1
    
    let stack = [];
    let hamburger = 0;
    
    for(let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]); // 재료 쌓기
        
        if(stack.length >= 4) { // 스택에 4개 이상 쌓였을 때
            let four = stack.slice(-4).join(''); // 마지막 4개 확인
            
            if(four === '1231') { // 햄버거 패턴 1231과 일치하면
                stack.splice(-4); // 스택에서 제거
                hamburger++; // 개수 증가
            }
        }
    }
    return hamburger;
}