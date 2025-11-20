function solution(players, callings) {
    // 저장할 객체 만들기
    // 그 객체에 players의 이름과 인덱스 저장
    // callings 순회하면서 불린 선수의 위치 찾고 그 불린 선수의 앞사람 이름 찾기
    // players 배열에서 자리 바꾸기
    // 객체에서도 자리 바꿔주기
    
    let save = {};
    
    for(let i = 0; i < players.length; i++) {
        save[players[i]] = i;
    }
    
    for(name of callings) {
        let index = save[name]; // 불린 선수 위치
        let previousName = players[index - 1]; // 불린 선수의 앞사람 이름
        
        // 자리 위치 바꾸기
        [players[index - 1], players[index]] = [players[index], players[index - 1]];
        
        save[name] = index - 1;
        save[previousName] = index; 
        
    }
    return players;
}