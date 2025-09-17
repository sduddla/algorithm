function solution(s) {
    // s 한 개 이상의 단어로 구성
    // 각 단어는 하나 이상의 공백문자로 구분
    // 각 단어 짝수 - 대문자
    // 각 단어 홀수 - 소문자
    
    const words = s.split(' ');
    
    for(let i = 0; i < words.length; i++) {
        let newWord = '';
        
        for(let j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) {
                newWord += words[i][j].toUpperCase();
            } else {
                newWord += words[i][j].toLowerCase();
            }
        }
        words[i] = newWord;
    }
    
    return words.join(' ');
}
    