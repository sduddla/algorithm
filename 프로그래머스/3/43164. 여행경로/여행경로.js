function solution(tickets) {
    // 모든 티켓 다 사용
    // 가능한 경로 2개 이상일 경우 사전 순으로 반환
    // 하나의 티켓 한 번만
    // ICN에서 시작
    
    let result = [];
    let visited = Array(tickets.length).fill(false); // 방문 여부
    
    // 사전 순 정렬
    tickets.sort();
    
    function dfs(current, path, count) {
        if(count === tickets.length) {
            result = path;
            return true;
        }
        
        for(let i = 0 ; i < tickets.length; i++) { // 현재 위치에서 갈 수 있는 티켓 탐색
            const [from, to] = tickets[i];
            
            if(!visited[i] && from === current) { // 방문 안했고, 출발지가 현재 위치일 때
                visited[i] = true; // 티켓 사용
                
                const next = dfs(to, [...path, to], count + 1);
                if (next) return true;
                visited[i] = false;
            }
        }
        return false;
    }
    dfs("ICN", ["ICN"], 0);
    return result;
}