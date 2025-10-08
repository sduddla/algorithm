function solution(board) {
    // 게임판이 규칙을 지켜서 진행한 틱택토에서 나올 수 있는 상황인가
    // o와 x 동시에 승리 불가
    // o 승리 -> x 보다 1개 많아야함
    // x 승리 -> o와 개수가 같아야 함
  
    // o 개수
    let oCount = 0;
  
    // x 개수
    let xCount = 0;
  
    // 개수 카운트
    for(let row of board) {
        for(let item of row) {
            if(item === 'O') oCount++;
            if(item === 'X') xCount++;
        }
    }
  
    // o는 x보다 1개 많거나 같아야 한다 -> x가 크거나 2개 이상 차이 나면 잘못된 게임
    if(xCount > oCount || oCount - xCount > 1) return 0;
    
    const win = (ch) => {
        // 가로
        for(let i = 0; i < 3; i++) {
            if(board[i][0] === ch && board[i][1] === ch && board[i][2] === ch) return true;
        }
        
        // 세로
        for(let i = 0; i < 3; i++) {
            if(board[0][i] === ch && board[1][i] === ch && board[2][i] === ch) return true;
        }
        
        // 대각선
        if(board[0][0] === ch && board[1][1] === ch && board[2][2] === ch) return true;
        if(board[2][0] === ch && board[1][1] === ch && board[0][2] === ch) return true;
        
        return false;  
    }
    
    const oWin = win('O');
    const xWin = win('X');
    
    // o와 x가 동시에 이길 수 없음
    if(oWin && xWin) return 0;
    
    // o가 이긴 경우, x의 개수보다 1개 더 많아야 한다.
    if(oWin && oCount < xCount + 1) return 0;
        
    // x가 이긴 경우, o와 X의 개수가 같아야 한다.
    if(xWin && xCount !== oCount) return 0;
    
    return 1;
}