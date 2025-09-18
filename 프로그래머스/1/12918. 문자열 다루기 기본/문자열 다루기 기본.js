function solution(s) {
    // 길이 먼저 검사
    if(!(s.length === 4 || s.length === 6)) return false;
    
    for(let i = 0; i < s.length; i++) {
        let ch = s[i];
        
        if(ch < '0' || ch > '9') {
            return false;
        }
    }
    
    return true;
}