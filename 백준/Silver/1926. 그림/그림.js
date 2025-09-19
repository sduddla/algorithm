const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 0: 색칠이 안 된 부분
// 1: 색칠이 된 부분

// 출력
// 첫째 줄: 그림의 개수
// 둘째 줄: 그 중 가장 넓은 그림의 넓이
// 그림이 하나도 없는 경우에는 가장 넓은 그림의 넓이 -> 0

// 전체 격자 돌면서 1이 나오고 아직 방문 안한 칸이면 BFS 시작
// BFS 안에서 큐를 써서 상하좌우 퍼져 나가며 1들 방문 처리
// 탐색 끝나면 그림 하나 완성 -> 개수 +1, 크기(넓이) 기록
// 최종적으로 그림 개수, 최대 넓이 출력

const [n, m] = input[0].split(' ').map(Number);

const board = input.slice(1).map(line => line.split(' ').map(Number)); // 도화지를 2차원 배열로
const visited = Array.from({length: n}, () => Array(m).fill(false)); // 방문

const directions = [
    [0, 1], // 오른쪽
    [0, -1], // 왼쪽
    [1, 0], // 아래
    [-1, 0], // 위
]

function bfs(startX, startY) {
    const queue = [[startX, startY]];
    visited[startX][startY] = true; // 방문 처리
    let area = 1; // 시작점 포함
    
    while(queue.length > 0) {
        const [x, y] = queue.shift();
        
        // 4방향
        for(let [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;
            
            if(
            nx >= 0 && nx < n &&
            ny >= 0 && ny < m &&
            (board[nx][ny] === 1 && 
            !visited[nx][ny])
            ) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                area++;
            }
        }
    }
    return area;
}

// 전체 탐색
let pictureCount = 0;
let maxArea = 0;

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(board[i][j] === 1 && !visited[i][j]) {
            pictureCount++;
            const area = bfs(i, j);
            if(area > maxArea) maxArea = area;
        }
    }
}

console.log(pictureCount);
console.log(maxArea);