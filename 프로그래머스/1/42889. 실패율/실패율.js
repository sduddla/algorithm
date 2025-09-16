function solution(N, stages) {
    // N - 전체 스테이지의 개수
    // stages - 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열 return
    
    // 실패율
    let fail = [];
    
    for(let i = 1; i <= N; i++) {
        // 도전자 수
        let cNum = stages.filter(stage => stage >= i).length;
        
        // 실패자 수
        let fNum = stages.filter(stage => stage === i).length;
        
        // 실패율 계산
        let rate = cNum === 0 ? 0 : fNum / cNum;
        
        fail.push([i, rate]); // 스테이지 번호, 실패율
    }
    
    fail.sort((a, b) => {
        if(b[1] === a[1]) return a[0] - b[0];
        else return b[1] - a[1];
    })
    
    return fail.map(item => item[0]);
    
}