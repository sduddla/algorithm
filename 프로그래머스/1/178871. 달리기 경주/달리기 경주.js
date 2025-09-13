function solution(players, callings) {
    let save = {};
    for(let i = 0; i < players.length; i++) {
        save[players[i]] = i; // 선수 이름과 위치 저장(mumu:0, soe:1)
    }
    
    for(let name of callings) {
        let index = save[name]; // 불린 선수 현재 위치 찾기
        
        if(index > 0) { // 맨 앞이 아닐 때
            let prev = players[index - 1]; // 불린 선수 앞 사람 이름
            
            // players 배열에서 자리 바꾸기
            [players[index - 1], players[index]] = [players[index], players[index - 1]];
            
            // 위치 바꾸기
            save[name] = index  - 1;
            save[prev] = index;
        }
    }
    
    return players;
}