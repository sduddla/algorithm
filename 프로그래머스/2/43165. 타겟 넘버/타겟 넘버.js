function solution(numbers, target) {
    
    let count = 0;
    
    function dfs(index, sum) {
        if(index === numbers.length) { // 모든 숫자 다 사용했다면
            if(sum === target) count++; // 누적합이 target과 같으면 경우의 수 1개 추가
            return;
        }
        
        // 현재 숫자에 +
        dfs(index + 1, sum + numbers[index]);
        
        // 현재 숫자에 -
        dfs(index + 1, sum - numbers[index]);
    }
    
    // 탐색 시작
    dfs(0, 0);
    
    return count;
}