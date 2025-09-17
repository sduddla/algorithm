function solution(priorities, location) {
    // priorities 현재 실행 큐에 있는 프로세스의 중요도가 순서대로 담긴 배열
    // location 몇 번째로 실행되는 지 알고싶은 프로세스의 위치 알려주는 
    
    // 뒤에 더 높은 우선순위 프로세스 있으면 -> 다시 큐 맨 뒤로
    // 아니면 -> 실행
    
    let cnt = 0;
    let queue = priorities.map((priority, index) => [priority, index]); // index도 같이 저장
    
    while(queue.length > 0) {
        let [priority, index] = queue.shift();
        let high = false;
        
        for(let i = 0; i < queue.length; i++) {
            if(queue[i][0] > priority) {
                high = true;
                break;
            }
        }
        
        if(high) {
            queue.push([priority, index]);
        } else {
            cnt++;
            if(index === location) return cnt;
        }
    }
}