function solution(participant, completion) {
    // 해시 테이블 생성
    const obj = {};
    
    // 참가자들 이름 해시 테이블에 추가
    for(const p of participant) {
        if(obj[p]) {
            obj[p] += 1;
        } else {
            obj[p] = 1;
        }
    }
    
    // 완주한 선수들의 이름을 키로 하는 값 1씩 감소
    for(const c of completion) {
        obj[c] -= 1;
    }
    
    // 해시 테이블에 남아 있는 선수가 완주하지 못한 선수
    for(const key in obj) {
        if(obj[key] > 0) {
            return key;
        }
    }
    

}