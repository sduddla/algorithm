function solution(s) {
    // s 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열
    
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
        nine: '9'
    }
    
    let result = '';
    let save = '';
    
    for(let i = 0; i < s.length; i++) {
        let ch = s[i];
        
        if(ch >= 0 && ch <= 9) {
            result += ch;
        } else {
            save += ch;
            
            if(map[save] !== undefined) {
                result += map[save];
                save = '';
            }
        }
    }
    return Number(result);
}