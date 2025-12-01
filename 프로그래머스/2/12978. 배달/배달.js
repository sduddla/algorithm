function solution(N, road, K) {
    // 각 마을에 어떤 마을과 얼마나 걸리는 지 기록
    const graph = Array.from({length: N + 1}, () => []);
    
    for(let [a, b, time] of road) { // 길이 양방향
        graph[a].push([b, time]);
        graph[b].push([a, time]);
    }
    
    // 거리 배열
    const dist = Array(N + 1).fill(Infinity); // 큰 숫자
    dist[1] = 0; // 1번 마을은 시작점, 거리 0
    
    // 방문할 마을들 담을 상자
    const queue = [[0, 1]]; // 현재까지 걸린 시간, 마을 번호
    
    while(queue.length > 0) {
        queue.sort((a, b) => a[0] - b[0]); // 시간 적은 순서대로 정렬
        const [time, now] = queue.shift();
        
        // 이미 더 짧은 길로 온 적이 있으면 스킵
        if(time > dist[now]) continue;
        
        // 현재 마을에서 갈 수 있는 이웃 마을들 탐색
        for(let [next, cost] of graph[now]) {
            const newTime = time + cost;
            
            // 더 빨리 갈 수 있는 길 찾았다면
            if(newTime < dist[next]) {
                dist[next] = newTime;
                queue.push([newTime, next]);
            }
        }
    }
    return dist.filter(t => t <= K).length;
}