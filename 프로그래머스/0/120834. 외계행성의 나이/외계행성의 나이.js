function solution(age) {
    var answer = '';
    
    const alphabet = 'abcdefghij';
    Array.from(String(age)).map(i => answer += alphabet[i]);
    return answer;
}