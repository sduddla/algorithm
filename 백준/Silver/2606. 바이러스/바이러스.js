const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]); // 컴퓨터 수
const m = Number(input[1]); // 간선

const graph = Array.from({length: n + 1}, () => []);

for(let i = 2; i < 2 + m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    // 양방향 그래프
    graph[a].push(b);
    graph[b].push(a);
}

const visited = Array(n + 1).fill(false); // 방문
let count = 0; // 개수

// bfs - 1번 컴퓨터에서 시작
const queue = [1];
visited[1] = true;

while(queue.length > 0) {
    const node = queue.shift();
    
    // 연결된 노드
    for(let next of graph[node]) {
        if(!visited[next]) {
            visited[next] = true;
            queue.push(next);
            count++;
        }
    }
}

console.log(count);