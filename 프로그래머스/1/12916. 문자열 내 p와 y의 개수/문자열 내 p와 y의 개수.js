function solution(s){
    s = s.toLowerCase();
    
    let pCnt = 0;
    let yCnt = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'p') {
            pCnt++;
        } else if(s[i] === 'y') {
            yCnt++;
        }
    }
    return pCnt === yCnt;
}