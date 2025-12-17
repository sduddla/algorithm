function solution(num_list) {
    // 배열에서 숫자 꺼내기
    // 그 숫자가 1이 될 때까지 반복
    // 짝수면 /2, 홀수면 -1
    // 연산할떄마다 count++
    // 모든 숫자에 대해 반복 -> count 반환
    
    let count = 0;
    for(let num of num_list) {
        while(num !== 1) {
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = (num - 1) / 2;
            }
            count++;
        }
    }
    return count;
}