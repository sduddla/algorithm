function solution(s) {
    s = s.split(' ');
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'Z') {
            result -= Number(s[i - 1]);
        } else {
            result += Number(s[i]);
        }
    }
    return result;
}