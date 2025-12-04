function solution(X, Y) {
    const result = [];
    
    // Y 개수 세기
    const countY = {};
    for(let ch of Y) {
        countY[ch] = (countY[ch] || 0) + 1;
    }
    
    // X에서 문자 하나씩 가져오기
    for(let ch of X) {
        if(countY[ch] > 0) {
            result.push(ch);
            countY[ch]--;
        }
    }
    
    if(result.length === 0) return "-1";
    result.sort((a, b) => b - a);
    
    if(result[0] === '0') return '0';
    return result.join('');
}