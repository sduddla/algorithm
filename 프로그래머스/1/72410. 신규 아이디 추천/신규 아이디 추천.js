function solution(new_id) {
    let str = new_id;
    
    // 1. 소문자로 치환
    str = str.toLowerCase();
    
    // 2. 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)만 남기기
    let temp = '';
    
    for(let ch of str) {
        if((ch >= 'a' && ch <= 'z') ||
           (ch >= '0' && ch <= '9') ||
           (ch === '-' || ch === '_' || ch === '.')) {
            temp += ch;
        }
    }
    
    str = temp;
    
    // 3. 마침표 2번 이상 연속되면 하나로 치환
    temp = '';
    
    for(let i = 0; i < str.length; i++) {
        if(!(str[i] === '.' && temp[temp.length - 1] === '.')) {
            temp += str[i]; 
        }
    }
    
    str = temp;
    
    // 4. 마침표가 처음이나 끝에 있으면 제거
    if(str[0] === '.') str = str.slice(1);
    if(str[str.length - 1] === '.') str = str.slice(0, -1);
    
    // 5. 빈 문자열이면 'a' 대입
    if(str === '') str = 'a';
    
    // 6. 길이가 16자 이상이면 15자까지 자르고, 끝에 마침표 있으면 제거
    if(str.length >= 16) str = str.slice(0, 15);
    if(str[str.length - 1] === '.') str = str.slice(0, -1);
    
    // 7. 길이가 2자 이하라면, 마지막 문자를 길이가 3 될 때까지 반복
    while(str.length <= 2) {
        str += str[str.length - 1];
    }
    
    return str;
}