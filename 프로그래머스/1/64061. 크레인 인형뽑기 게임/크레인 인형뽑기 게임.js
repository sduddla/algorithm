function solution(board, moves) {
    // board에서 moves에 따라 인형 뽑음
    // 뽑은 인형 바구니에 넣기
    // 바구니에서 가장 위 인형과 같으면 둘다 pop
    
    let stack = []; // 바구니
    let cnt = 0; // 터트려서 사라진 인형 개수
    
    for(let move of moves) {
        for(let i = 0; i < board.length; i++) {
            const doll = board[i][move - 1];
            if(doll !== 0) {
                board[i][move - 1] = 0; // 인형 뽑았으니 0으로 처리
                if(stack[stack.length - 1] === doll) { // 바구니 맨 위 인형과 같다면 터트리기
                    stack.pop();
                    cnt += 2;
                } else {
                    stack.push(doll); // 바구니에 인형 추가
                }
                break;
            }
        }
    }
    return cnt;
}