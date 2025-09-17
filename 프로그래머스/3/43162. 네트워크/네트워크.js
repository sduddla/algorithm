function solution(n, computers) {
    // n - 컴퓨터 개수
    // computers - 연결에 대한 정보가 담긴 2차원 배열
    
    const visited = Array(n).fill(false);
    let count = 0;
    
    function dfs(node) {
        visited[node] = true; // 방문 처리
        
        for(let next = 0; next < n; next++) { // 현재 컴퓨터와 연결된 다른 컴퓨터들 탐색
            // 연결되어 있거나
            // 방문되지 않은 컴퓨터라면
            if(computers[node][next] === 1 && !visited[next]) {
                dfs(next); // 연결된 컴퓨터도 방문 - 그와 연결된 모든 컴퓨터까지 쭉 탐색
            }
        }
    }
    
    // 모든 컴퓨터 돌면서 방문하지 않은 컴퓨터 있으면 DFS 시작
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i); // i번 컴퓨터를 시작점으로 연결된 전체 네트워크 탐색
            count++; // 네트워크 하나 완전히 탐색 -> count++
        }
    }
    
    return count;
}