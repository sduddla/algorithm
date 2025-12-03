function solution(people, limit) {
    // 오름차순 정렬 [50, 50, 70, 80]
    // left 가벼운 사람, right 무거운 사람
    
    // 정렬
    people.sort((a, b) => a - b);
    
    let left = 0;
    let right = people.length - 1;
    let count = 0;
    
    while(left <= right) {
        if(people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        count++;
    }
    return count;
}