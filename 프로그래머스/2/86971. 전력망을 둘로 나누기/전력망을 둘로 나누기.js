function solution(n, wires) {
    // n 송전탑 개수
    // wires 전선 정보
    // 무조건 하나의 트리
    // wires 중 하나 끊기, 전력망이 두 덩어리로 나눠질 때 두 덩어리 크기 차이가 가장 적은 경우

    // 그래프 만들기
    const graph = Array.from({length: n + 1}, () => []);
    for(const [a, b] of wires) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    function dfs(node, parent) {
        let count = 1;
        
        for(const child of graph[node]) {
            if(child !== parent) {
                count += dfs(child, node);
            }
        }
        return count;
    }
    
    let result = Infinity;
    
    // wires 하나씩 끊어보기
    for(const [a, b] of wires) {
        graph[a].splice(graph[a].indexOf(b), 1);
        graph[b].splice(graph[b].indexOf(a), 1);
        
        // 송전탑 개수
        let countA = dfs(a, b);
        let countB = n - countA;
        
        let diff = Math.abs(countA - countB);
        
        result = Math.min(result, diff);
        
        // 복원, 다음 탐색 위해
        graph[a].push(b);
        graph[b].push(a);
    }
    return result;
}