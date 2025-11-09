function solution(s) {
    const map = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    }
    
    let result = ''; // 결과
    let save = ''; // 영단어
    
    for(let i = 0; i < s.length; i++) {
        let ch = s[i];
        
        if(ch >= 0 && ch <= 9) { // 숫자면 result에 넣기
            result += ch;
        } else {
            save += ch;
        }
        
        if(map[save] !== undefined) {
            result += map[save];
            save = ''; // 초기화
        }
    }
    return Number(result);
}