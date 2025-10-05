function solution(n, k) {
    let result = []; // 결과 담을 배열
    let nums = []; // 숫자 담을 배열
    
    // 1~n 번호 추가
    for(let i = 1; i <= n; i++) {
        nums.push(i);
    }
    
    // 팩토리얼
    function factorial(num) {
        if(num === 0) return 1;
        return num * factorial(num - 1);
    }
    
    k = k - 1; // 인덱스 0부터
    
    for(let i = n; i >= 1; i--) {
        const f = factorial(i - 1); // 현재 숫자 기준 뒤에 올 경우의 수
        const index = Math.floor(k / f); // 현재 자리 숫자가 num 배열에서 몇 번째인 지 계산
        result.push(nums[index]); // 선택된 숫자 추가
        nums.splice(index, 1); // 선택한 숫자 제거
        k %= f; // k 업데이트
    }
    return result;
}