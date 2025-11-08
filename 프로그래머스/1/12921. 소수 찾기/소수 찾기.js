function solution(n) {
    const arr = new Array(n + 1).fill(true); // n까지 숫자 true로 채우기
    
    // 0, 1 소수 아님
    arr[0] = false;
    arr[1] = false;
    
    for(let i = 2; i <= n; i++) {
        for(let j = i * 2; j <= n; j+=i) { // i 배수들은 소수 아님
            arr[j] = false;
        }
    }
    return arr.filter(x => x).length;
}