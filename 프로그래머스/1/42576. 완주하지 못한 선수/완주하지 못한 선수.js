function solution(participant, completion) {
    // participant 마라톤에 참여한 선수들의 이름이 담긴 배열
    // completion 완주한 선수들의 이름이 담긴 배열
    
    participant.sort();
    completion.sort();
    
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}