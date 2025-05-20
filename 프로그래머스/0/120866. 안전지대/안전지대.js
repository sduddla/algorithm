function solution(board) {
    let n = board.length;
    const danger = Array.from({length: n}, () => Array(n).fill(0));
    
    const x = [-1, -1, -1, 0, 0, 1, 1, 1];
    const y = [-1, 0, 1, -1, 1, -1, 0, 1];
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(board[i][j] === 1) {
                danger[i][j] = 1;
                for(let k=0; k<8; k++) {
                    const ni = i + x[k];
                    const nj = j + y[k];
                    if(ni >= 0 && ni < n && nj >= 0 && nj < n) {
                        danger[ni][nj] = 1;
                    }
                }
            }
        }
    }
    let safe = 0;
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(danger[i][j] === 0) {
                safe++;
            }
        }
    }
    return safe;
}