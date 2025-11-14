function solution(N, stages) {
    // N 전체 스테이지 개수
    // stages 게임 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
    // 실패율, 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
    
    const result = []; // 실패율이 담긴 배열
    let total = stages.length;
    
    // 스테이지 순회
    for(let i = 1; i <= N; i++) {
        let current = stages.filter(stage => stage === i).length;
        result.push([i, current / total])
        total = total - current
    }
    result.sort((a, b) => b[1] - a[1]);
    
    return result.map((item) => item[0]);
}