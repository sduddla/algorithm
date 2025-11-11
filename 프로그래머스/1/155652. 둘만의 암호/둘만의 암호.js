function solution(s, skip, index) {
    // skip 문자열 제외
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(ch => !skip.includes(ch))
    
    // index만큼 건너뛰기
    // s에 각 문자 확인
    // alphabet 안에서 그 문자 위치 찾기
    // 위치 + index
    // 알파벳 끝까지 가면 다시 처음으로
    
    let result = ''
    for(let ch of s) {
        const currentIndex = alphabet.indexOf(ch); // 위치 찾기
        const newIndex = (currentIndex + index) % alphabet.length;
        result += alphabet[newIndex];
    }
    return result;
}