function solution(participant, completion) {
    // participant 정렬
    participant.sort();
    
    // completion 정렬
    completion.sort();
    
    // 비교
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}