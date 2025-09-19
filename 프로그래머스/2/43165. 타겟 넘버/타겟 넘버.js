function solution(numbers, target) {
    
    // 사용할 수 있는 숫자가 담긴 배열 - numbers
    // 타겟 넘버 - target
    
    // numbers 배열에 + 또는 - 붙여서 계산
    // 모든 숫자에 대해 더하거나 빼는 모든 경우의 수 고려
    // 최종합 -> target 되는 경우의 수
    
    let cnt = 0;
    
    function dfs(index, sum) { // 인덱스, 현재까지의 합
        if(index === numbers.length) {
            if(sum === target) {
                cnt++;
            }
            return;
        }
        
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    dfs(0, 0);
    
    return cnt;
}