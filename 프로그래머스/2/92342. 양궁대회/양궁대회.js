function solution(n, info) {
    // n 라이언이 가진 화살의 개수
    // info 어피치가 맞힌 과녁의 점수의 개수를 10점부터 0점까지 순서대로 담은 정수 배열
    // 각 구간 -> 라이언이 어피치보다 많이 쏘거나 안 쏘거나
    
    let maxDiff = 0;
    let ryan = Array(11).fill(0);
    let answer = [-1];
    
    function dfs(index, arrowLeft) {
        // 0~10점 다 탐색
        if(index === 11) {
            ryan[10] += arrowLeft; // 남은 화살 다 0점에 몰기
            
            // 현재 점수
            let ryanScore = 0;
            let apeachScore = 0;
            
            for(let i = 0; i < 11; i++) {
                // 둘 다 0점이면 점수 없음
                if(ryan[i] === 0 && info[i] === 0) continue;
                
                if(ryan[i] > info[i]) ryanScore += (10 - i);
                else apeachScore += (10 - i);
            }
            
            // 점수 차
            let diff = ryanScore - apeachScore;
            
            if(diff > 0) {
                if(diff > maxDiff) {
                    maxDiff = diff;
                    answer = [...ryan];
                } else if(diff === maxDiff) { // 점수 차 같으면 낮은 점수 더 많이 맞힌 경우 선택
                    for(let i = 10; i >= 0; i--) {
                        if(ryan[i] > answer[i]) {
                            answer = [...ryan];
                            break;
                        } else if(ryan[i] < answer[i]) {
                            break;
                        }
                    }
                }
            }
            
            ryan[10] -= arrowLeft; // 0점에 몰았던 화살 빼기
            return;
            
        }
        
        // 어피치 이기기 - 한 발 더 쏘기
        if(arrowLeft > info[index]) {
            ryan[index] = info[index] + 1;
            dfs(index + 1, arrowLeft - (info[index] + 1));
            ryan[index] = 0;
        }
        
        // 점수 포기
        dfs(index + 1, arrowLeft);
        
    }
    
    dfs(0, n);
    return maxDiff === 0 ? [-1] : answer;
}