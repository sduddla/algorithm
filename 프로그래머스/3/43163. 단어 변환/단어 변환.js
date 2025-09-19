function solution(begin, target, words) {
    
    // 시작 단어 begin -> 목표 단어 target 변환
    // 한 번에 한 개의 알파벳만 바꿀 수 있음
    // words에 있는 단어로만 변환 가능
    // 최소 몇 단계 만에 변환할 수 있는 지 구하기 (변환 x -> 0)
    
    // begin 단어부터 시작 -> 큐에 넣기
    // 한 글자만 다른 단어들을 찾아 큐에 추가
    // 방문한 단어는 사용 x
    // target 단어 도착 -> 단계 수 반환
    // 큐가 빌 때까지 못 찾으면 0 반환
    
    
    if(!(words.includes(target))) return 0; // target이 words에 없으면 반환 불가
    
    const visited = Array(words.length).fill(false); // 방문 여부
    const queue = [[begin, 0]]; // [현재 단어, 단계 수]
    
    while(queue.length > 0) {
        const [word, steps] = queue.shift();
        
        if(word === target) {
            return steps;
        }
        
        for(let i = 0; i < words.length; i++) {
            if(!visited[i] && canChange(word, words[i])) { // 현재 탐색 중인 단어, 아직 방문하지 않은 단어 중 하나
                visited[i] = true;
                queue.push([words[i], steps + 1]) // 변환한 단어, 단계 + 1
            }
        }
    }
    return 0;
    
}

// 한 글자만 다르면 true, 아니면 false
function canChange(a, b) {
    let diff = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) diff++;
        if(diff > 1) return false;
    }
    return diff === 1;
}