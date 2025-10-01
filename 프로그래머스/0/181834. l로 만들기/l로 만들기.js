function solution(myString) {
    let answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        
    for(let i = 0; i < myString.length; i++) {
        if(alphabet.indexOf(myString[i]) < alphabet.indexOf('l')) {
            answer += 'l';
        } else {
            answer += myString[i];
        }
    }
    return answer;
}