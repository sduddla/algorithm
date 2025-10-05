function solution(X, Y) {
    // 0~9 각 숫자 개수 저장할 배열
    const cntX = Array(10).fill(0);
    const cntY = Array(10).fill(0);
    
    // X 문자열에 등장하는 각 숫자 개수 카운트
    for(let nCnt of X) {
        cntX[nCnt]++;
    }
    
    // Y 문자열에 등장하는 각 숫자 개수 카운트
    for(let nCnt of Y) {
        cntY[nCnt]++;
    }
    
    let result = '';
    
    for(let i = 9; i >= 0; i--) {
        const common = Math.min(cntX[i], cntY[i]); // 최소 개수
        result += i.toString().repeat(common); // 해당 숫자 반복해서 추가
    }
    
    if(result === '') return '-1'; // 공통 숫자 없을 경우
    if(result[0] === '0') return '0'; // 0만 여러 개 있을 때 0 하나만 반환
    return result;
}