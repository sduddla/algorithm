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
    
    let result = '';
    let num = '';
    
    for(let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch >= 0 && ch <= 9) {
            result += ch;
        } else {
            num += ch;
        }
        
        if(map[num] !== undefined) {
            result += map[num];
            num = '';
        }
    }
    return Number(result);
}