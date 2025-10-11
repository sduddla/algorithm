function solution(N, stages) {
    // N 스테이지 개수
    // stages 게임을 이용하는 사용자가 현재 멈춰있는 스테이지 번호가 담긴 배열
    // 실패율
    // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    
    // 스테이지 별 도전자 수
    const challenger = new Array(N + 2).fill(0);
    
    for(const stage of stages) {
        challenger[stage] += 1;
    }
    
    // 스테이지 별 실패자 수 계산
    const fails = {};
    
    // 스테이지에 도달한 플레이어 수
    let total = stages.length;
    
    // 각 스테이지 순회하며, 실패율 계산
    for(let i = 1; i <= N; i++) {
        if(challenger[i] === 0) { // 도전한 사람이 없는 경우
            fails[i] = 0;
            continue;
        }
        
        // 실패율 계산
        fails[i] = challenger[i] / total;
        
        // 다음 스테이지 실패율 구하기 위해 현재 스테이지 인원 뺌
        total -= challenger[i];
    }
    
    // 실패율이 높은 스테이지부터 내림차순으로 정렬
    const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
    
    // 스테이지 번호만 반환
    return result.map((item) => Number(item[0]));
}