function solution(park, routes) {
    let x = 0;
    let y = 0;
    
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[0].length; j++) {
            if(park[i][j] === 'S') {
                x = i;
                y = j;
            }
        }
    }
    
    const directions = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    }
    
    for(let r of routes) {
        let [dir, step] = r.split(' ');
        let s = Number(step);
        
        let [dx, dy] = directions[dir];
        let nx = x;
        let ny = y;
        
        let canMove = true;
        
        for(let i = 0; i < s; i++) {
            nx += dx;
            ny += dy;
            
            if(nx < 0 ||  nx >= park.length ||
              ny < 0 || ny >= park[0].length ||
              park[nx][ny] === 'X') {
                canMove = false;
                break;
            }
        }
        
        if(canMove) {
            x = nx;
            y = ny;
        }
    }
    
    return [x, y];
}