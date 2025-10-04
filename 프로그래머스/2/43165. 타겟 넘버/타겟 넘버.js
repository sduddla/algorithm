function solution(numbers, target) {
    
    let cnt = 0; // 타겟 넘버 만드는 방법의 수
    
    function dfs(index, sum) { // 인덱스, 현재까지 합
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