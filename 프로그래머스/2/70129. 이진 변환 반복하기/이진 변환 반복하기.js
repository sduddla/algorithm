function solution(s) {
    let convertCount = 0;
    let zeroCount = 0;
    
    while(s !== '1') {
        
        // 0 개수
        const removeZero = s.split('').filter(item => item === '0').length;
        zeroCount += removeZero;
        
        // 0 제거 후 길이
        const removeZeroLength = s.length - removeZero;
        
        // 이진 변환
        s = removeZeroLength.toString(2);
        
        // 이진 변환 개수
        convertCount++;
    }
    return [convertCount, zeroCount];
}