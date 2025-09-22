function solution(N, stages) {
    // N: 전체 스테이지 개수
    // stages: 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
    
    // 실패율
    // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지 도달한 플레이어 수
    
    let result = [];
    
    for(let i = 1; i <= N; i++) {
        // 스테이지에 도달한 플레이어 수
        let cNum = stages.filter(stage => stage >= i).length;
        
        // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
        let fNum = stages.filter(stage => stage === i).length;
        
        // 실패율
        let failRate = cNum === 0 ? 0 : fNum / cNum;
        
        result.push([i, failRate]); // 스테이지 번호, 실패율
    }
    
    result.sort((a, b) => {
        if(a[1] === b[1]) a[0] - b[0];
        else return b[1] - a[1];
    })
    
    return result.map(item => item[0]);
}