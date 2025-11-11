function solution(maps) {
    // S 시작
    // E 출구
    // L 레버
    // 시작 -> 레버 -> 출구
    // 시작 -> 레버 
    // 레버 -> 출구
    
    const n = maps.length;
    const m = maps[0].length;
    
    // 4방향
    const directions = [
        [0, 1], // 오른쪽
        [0, -1], // 왼쪽
        [1, 0], // 아래
        [-1, 0] // 위
    ]
    
    // BFS
    function bfs(start, end) {
        const queue = [start];
        
        // 방문 여부
        const visited = Array.from({length: n}, () => Array(m).fill(false));
        
        // 최단 거리
        const distance = Array.from({length: n}, () => Array(m).fill(0));
        
        visited[start[0]][start[1]] = true;
        
        while(queue.length > 0) {
            const [x, y] = queue.shift();
            
            // 도착할 경우, 거리 반환
            if(x === end[0] && y === end[1]) return distance[x][y];
            
            // 4방향
            for(const [dx, dy] of directions) {
                let nx = dx + x;
                let ny = dy + y;
                
                if(nx >= 0 && nx < n &&
                  ny >= 0 && ny < m &&
                  maps[nx][ny] !== 'X' &&
                  !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    distance[nx][ny] = distance[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
        
        return -1;
    }
    
    // S, L, E
    // 시작, 레버, 출구
    let start, lever, exit;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(maps[i][j] === 'S') start = [i, j];
            if(maps[i][j] === 'L') lever = [i, j];
            if(maps[i][j] === 'E') exit = [i, j];
        }
    }
    
    // 시작 -> 레버
    const goLever = bfs(start, lever);
    if(goLever === -1) return -1;
    
    // 레버 -> 출구
    const goExit = bfs(lever, exit);
    if(goExit === -1) return -1;
    
    // 두 거리 합
    return goLever + goExit;
}