function solution(queue1, queue2) {
    
    let n = queue1.length;
    
    // queue1 합
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    
    // queue2 합
    let sum2 = queue2.reduce((a, b) => a + b, 0);
    
    // 전체 합
    const total = sum1 + sum2;
    
    // 합 홀수 x
    if(total % 2 !== 0) return -1;
    
    const target = total / 2;
    
    // queue1, queue2 이어 붙이기
    const arr = [...queue1, ...queue2];
    
    let i = 0; // 0 ~ n-1
    let j = n; // n ~ 2n-1
    
    let cnt = 0;
    
    while(cnt <= n * 3) {
        if(sum1 === target) return cnt;
        
        if(sum1 < target ) {
            // queue2에서 가져오기
            sum1 += arr[j];
            j++;
        } else {
            sum1 -= arr[i];
            i++;
        }
        cnt++;
    }
    return -1;
}