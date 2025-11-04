function solution(msg) {
    let map = new Map();
    let result = [];
    let index = 1;
    
    // A~Z map에 미리 등록
    for(let i = 65; i <= 90; i++) {
        map.set(String.fromCharCode(i), index++);
    }
    
    let w = '';
    for(let i = 0; i < msg.length; i++) {
        let c = msg[i];
        let wc = w + c;
        
        if(map.has(wc)) { // 사전에 wc가 있다면 w 업데이트
            w = wc;
        } else { // 사전에 없다면, 색인번호 결과에 추가 및 wc 사전에 등록
            result.push(map.get(w));
            map.set(wc, index++);
            w = c; // w 초기화
        }
    }
    
    // 마지막 남은 w 있다면, 결과에 추가
    if (w) result.push(map.get(w));
    
    return result;
}