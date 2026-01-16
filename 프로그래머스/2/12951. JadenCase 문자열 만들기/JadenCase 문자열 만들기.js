function solution(s) {
    let result = '';
    let start = true;
    
    for(let i = 0; i < s.length; i++) {
        const ch = s[i];
        
        if(ch === ' ') {
            result += ch;
            start = true;
        } else {
            if (start) {
                if (ch >= 'a' && ch <= 'z') {
                    result += ch.toUpperCase();
                } else {
                    result += ch;
                }
                start = false;
            } else {
                result += ch.toLowerCase();
            }
        }
    }
    return result;
}