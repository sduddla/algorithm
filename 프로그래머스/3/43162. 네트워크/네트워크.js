function solution(n, computers) {
    // 방문 false
    const visited = Array(n).fill(false);
    let count = 0;
    
    function dfs(node) {
        visited[node] = true;
        
        // 현재 컴퓨터와 연결된 다른 컴퓨터 탐색
        for(let next = 0; next < n; next++) {
            if(!visited[next] && computers[node][next] === 1) { // 방문 x, 연결 o
                dfs(next);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i);
            count++;
        }
    }
    return count;
}