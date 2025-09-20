const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 1 이동 가능
// 0 이동 불가능
// 인접한 칸으로만 이동 가능

// n, m
const [n, m] = input[0].split(' ').map(Number);

// 미로
const maze = input.slice(1).map(line => line.split('').map(Number));
const visited = Array.from({length: n}, () => Array(m).fill(false)); // 방문
const distance = Array.from({length: n}, () => Array(m).fill(0)); // 최단 거리

// 4 방향
const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

const queue = [[0, 0]]
visited[0][0] = true;
distance[0][0] = 1;

while(queue.length > 0) {
    const [x, y] = queue.shift();
    
    if(x === n-1 && y === m-1) {
        console.log(distance[x][y]);
        return;
    }
    
    // 4 방향
    for(let [dx, dy] of directions) {
        let nx = dx + x;
        let ny = dy + y;
        
        if(
        nx >= 0 && nx < n &&
        ny >= 0 && ny < m &&
        (!visited[nx][ny] && maze[nx][ny] === 1) ) {
            visited[nx][ny] = true;
            distance[nx][ny] = distance[x][y] + 1; // 거리 업데이트
            queue.push([nx, ny]);
        }
    }
}
