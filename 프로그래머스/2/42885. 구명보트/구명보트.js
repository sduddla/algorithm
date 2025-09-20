function solution(people, limit) {
    
    // 무게가 큰 사람 - 보트
    // 가장 무거운 사람 + 가장 가벼운 사람 < limit -> 같이 아니면 혼자
    
    people.sort((a, b) => a - b); // 오름차순
    
    let left = 0;
    let right = people.length - 1;
    let cnt = 0;
    
    while(left <= right) {
        if(people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        cnt++;
    }
    return cnt;
}