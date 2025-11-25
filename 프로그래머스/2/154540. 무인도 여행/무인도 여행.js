function bfs(startX, startY, maps, visited) {
    const queue = [[startX, startY]];
    visited[startX][startY] = true;
    
    const directions = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
    ];
    
    let sum = Number(maps[startX][startY]);
    
    const n = maps.length;
    const m = maps[0].length;
    
    while(queue.length > 0) {
        const [x, y] = queue.shift();
        
        for(let [dx, dy] of directions) {
            const nx = dx + x;
            const ny = dy + y;
            
            if(nx >= 0 && nx < n &&
              ny >= 0 && ny < m && 
              (maps[nx][ny] !== 'X' && !visited[nx][ny])) {
                visited[nx][ny] = true;
                sum += Number(maps[nx][ny]);
                queue.push([nx, ny]);
            }
        }
    }
    return sum;
}


function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    
    const result = [];
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(!visited[i][j] && maps[i][j] !== 'X') {
                const sum = bfs(i, j, maps, visited);
                result.push(sum);
            }
        }
    }
    return result.length ? result.sort((a, b) => a - b) : [-1];
}