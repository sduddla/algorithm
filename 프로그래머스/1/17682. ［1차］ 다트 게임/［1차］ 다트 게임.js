function solution(dartResult) {
    // S 1제곱
    // D 2제곱
    // T 3제곱
    // * 해당 점수와 바로 전에 얻은 점수 2배로
    // # 해당 점수 마이너스
    
    let dartResultArr = dartResult.split('');
    let answer = [];
    let num = '';
    
    for(let i = 0; i < dartResultArr.length; i++) {
        let ch = dartResultArr[i];
        
        if(!isNaN(ch)) { // 숫자면 이어 붙이기, 10
            num += ch;
        } else if (ch === 'S' || ch === 'D' || ch === 'T') {
            let score = parseInt(num);
            num = '';
            
            if(ch === 'S') score = Math.pow(score, 1);
            if(ch === 'D') score = Math.pow(score, 2);
            if(ch === 'T') score = Math.pow(score, 3);
            
            answer.push(score);
        } else if (ch === '*' || ch === '#') {
            if (ch === '*') {
                // 해당 점수 2배
                answer[answer.length - 1] *= 2;
                
                // 이전 점수 2배
                if(answer.length > 1) {
                    answer[answer.length - 2] *= 2;
                }
            } else if (ch === '#') {
                // 해당 점수 마이너스
                answer[answer.length - 1] *= -1;
            }
        }
    }
    return answer.reduce((a, b) => a + b);
}