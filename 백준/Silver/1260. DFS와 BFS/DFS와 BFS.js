// N - 정점 개수
// M - 간선 개수
// V - 시작 정점 번호

// DFS와 BFS 탐색 결과를 출력
// 방문할 수 있는 정점이 여러 개면 번호가 작은 것부터 방문

// 첫째 줄 - DFS
// 둘째 줄 - BFS

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, v] = input[0].split(' ').map(Number);

const graph = Array.from({length: n + 1}, () => []); // 정점에 연결된 노드 배열로
for(let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

for(let i = 1; i <= n; i++) {
    graph[i].sort((a, b) => a - b);
}

// DFS (재귀)
let visited = Array(n + 1).fill(false);
let dfsResult = [];
function dfs(node) {
    visited[node] = true;
    dfsResult.push(node);
    for(let next of graph[node]) {
        if(!visited[next]) dfs(next);
    }
}
dfs(v);

// BFS
visited = Array(n + 1).fill(false);
let bfsResult = [];
function bfs(start) {
    const queue = [start];
    visited[start] = true;
    
    while(queue.length) {
        const node = queue.shift();
        bfsResult.push(node);
        
        for(let next of graph[node]) {
            if(!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }
}
bfs(v);

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));