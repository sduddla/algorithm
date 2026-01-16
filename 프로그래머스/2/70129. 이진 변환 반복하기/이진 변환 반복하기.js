function solution(s) {
    let convertCount = 0; // 이진 변환 횟수
    let zeroCount = 0; // 제거된 모든 0 개수
    
    // s가 1일 될 때까지
    while (s !== '1') {
        let removeZero = s.split('').filter((item) => item === '0').length;
        zeroCount += removeZero;
        
        let len = s.length - removeZero;
        s = len.toString(2);
        convertCount++;
    }
    return [convertCount, zeroCount];
}