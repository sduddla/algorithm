
// 좌표평면
function isMove(nx, ny) {
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

// 좌표
function location(x, y, dir) {
    switch(dir) {
        case 'U':
            return [x, y + 1];
        case 'D':
            return [x, y - 1];
        case 'R':
            return [x + 1, y];
        case 'L':
            return [x - 1, y];
    }
}

function solution(dirs) {
    let x = 0;
    let y = 0;
    
    // 겹치는 좌표 1개로 처리
    const visited = new Set();
    
    for(const dir of dirs) {
        const [nx, ny] = location(x, y, dir);
        if(!isMove(nx, ny)) { // 벗어난 좌표는 인정하지 않음
            continue;
        }
        
        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);
        
        [x, y] = [nx, ny];
    }
    
    return visited.size / 2;
}