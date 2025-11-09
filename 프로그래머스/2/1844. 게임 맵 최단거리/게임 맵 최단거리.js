function solution(maps) {
    // maps 2차원 배열
    // 캐릭터 (0, 0) 상대방 (n-1, m-1)
    // 캐릭터 움직일때, 동 서 남 북
    // 게임 맵 벗어난 길 갈 수 없음
    // 0 벽 있는 자리, 1 벽 없는 자리
    
    const n = maps.length;
    const m = maps[0].length;
    
    // 방문 여부
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    
    // 최단 거리
    const distance = Array.from({length: n}, () => Array(m).fill(0));
    
    // 4 방향
    const directions = [
        [0, 1], // 오른쪽
        [0, -1], // 왼쪽
        [1, 0], // 아래
        [-1, 0], // 위
    ]
    
    const queue = [[0, 0]]; // 시작점 초기화
    visited[0][0] = true; // 방문 처리
    distance[0][0] = 1;
    
    let front = 0;
    while(front < queue.length) {
        const [x, y] = queue[front++];
        
        if(x === n - 1 && y === m - 1) { // 도착하면 최단 거리 반환
            return distance[x][y];
        }
        
        // 4방향 확인
        for(let [dx, dy] of directions) {
            let newX = dx + x;
            let newY = dy + y;
            
            if(newX >= 0 && newX < n &&
              newY >= 0 && newY < m &&
              (maps[newX][newY] === 1 && !visited[newX][newY])) {
                visited[newX][newY] = true; // 방문 처리
                distance[newX][newY] = distance[x][y] + 1;
                queue.push([newX, newY]);
            }
        }
    }
    return -1; // 도착할 수 없는 경우
}