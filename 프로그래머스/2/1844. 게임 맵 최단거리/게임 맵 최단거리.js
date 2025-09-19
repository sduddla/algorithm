function solution(maps) {
    // 내 캐릭터 -> [0, 0]
    // 캐릭터 움직일 때 -> 동, 서, 남, 북으로 한 칸씩 이동
    // 0 -> 벽이 있는 자리
    // 1 -> 벽이 없는 자리
    // 도착 지점 (n-1, m-1) 처음 도달하면 그때 거리 반환
    // 끝까지 도달 못하면 -1 리턴
    
    const n = maps.length; // 세로
    const m = maps[0].length; // 가로
    
    // 방문 여부와 최단 거리 기록용 2차원 배열
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    const distance = Array.from({length: n}, () => Array(m).fill(0));
    
    // 4방향 이동: 오른쪽 왼쪽 아래 위
    const directions = [
        [0, 1], // 오른쪽
        [0, -1], // 왼쪽
        [1, 0], // 아래
        [-1, 0], // 위
    ]
    
    // 시작점 큐에 넣고 초기화
    const queue = [[0, 0]];
    visited[0][0] = true; // 시작점 방문 처리
    distance[0][0] = 1; // 시작점까지의 거리 = 1칸
    
    // BFS 루프
    while(queue.length > 0) {
        const [x, y] = queue.shift();
        
        if(x === n - 1 && y === m - 1) { // 도착 지점에 도착하면 최단 거리 반환
            return distance[x][y];
        }
        
        for(let [dx, dy] of directions) { // 4방향 이웃 칸 확인
            let newX = x + dx;
            let newY = y + dy;
            
            // 맵 범위 안, 벽이 아님(=1), 아직 방문하지 않음
            if(
            newX >= 0 && newX < n &&
            newY >= 0 && newY < m &&
            (maps[newX][newY] === 1 && !visited[newX][newY])) {
                visited[newX][newY] = true; // 방문 처리
                distance[newX][newY] = distance[x][y] + 1; // 거리 업데이트, 현재까지 거리 + 1
                queue.push([newX, newY]); // 다음 탐색 대상으로
            }
        }
    }
    return -1; // 도착할 수 없는 경우
}