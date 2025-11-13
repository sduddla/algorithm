function solution(n, words) {
    // 이미 사용한 단어 저장
    // 이전 단어 마지막 글자 저장
    // 첫글자와 마지막 글자가 일치하지 않을 시, 중복일 시, 탈락하는 사람 번호와 차례 반환
    // 사용한 단어 추가
    // 이전 단어 마지막 글자 업데이트
    // 탈락자가 생기지 않을 시, [0,0] 반환
    // 몇 번째 사람인지, (i % n) + 1
    // 몇 차례인지, Math.floor(i / n) + 1
    
    let useWords = new Set();
    useWords.add(words[0]); // 첫 단어 넣기
    
    let prevWord = words[0][words[0].length - 1]; // 마지막 글자
    
    for(let i = 1; i < words.length; i++) {
        let word = words[i];
        
        if(word[0] !== prevWord || useWords.has(word)) {
            const person = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [person, turn];
        }
        
        useWords.add(word);
        prevWord = word[word.length - 1];
    }
    return [0, 0];
}