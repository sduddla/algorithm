function solution(keyinput, board) {
    let start = [0, 0];
    let brange = [Math.floor(board[0]/2), Math.floor(board[1]/2)];
    
    for(key of keyinput){
        if(key === 'left' && start[0] > -brange[0]) start[0]--;
        if(key === 'right'&& start[0] < brange[0]) start[0]++;
        if(key === 'up' && start[1] < brange[1]) start[1]++;
        if(key === 'down' && start[1] > -brange[1]) start[1]--;
    }
    return start;
}
