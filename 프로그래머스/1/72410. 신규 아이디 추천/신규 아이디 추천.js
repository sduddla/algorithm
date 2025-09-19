function solution(new_id) {
    // 1. 모든 대문자 대응되는 소문자로
    // 2. 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표 제외한 모든 문자 제거
    // 3. 마침표가 연속으로 나오면 하나로 치환
    // 4. 마침표가 처음이나 끝에 있으면 제거
    // 5. 빈 문자열이라면 'a' 대입
    // 6. 길이가 16자 이상이면 15자까지만 자르고, 끝에 마침표가 있으면 제거
    // 7. 길이가 2자 이하라면, 마지막 문자를 길이가 3 될때까지 반복
    
    let s = new_id;
    
    // 1. 소문자로 치환
    s = s.toLowerCase();
    
    // 2. 허용 문자만 남기기
    let temp = '';
    for(let ch of s) {
        if((ch >= 'a' && ch <= 'z') || 
          (ch >= '0' && ch <= '9') ||
          (ch === '-' || ch === '_' || ch === '.')) {
           temp += ch;  
        }
    }
    s = temp;
    
    // 3. 마침표 연속 -> 하나로
    temp = '';
    for(let i = 0; i < s.length; i++) {
        if(!(s[i] === '.' && temp[temp.length - 1] === '.')) {
            temp += s[i];
        }
    }
    
    s = temp;
    
    // 4. 마침표 처음이거나 끝에 위치한다면 제거
    if(s[0] === '.') s = s.slice(1);
    if(s[s.length - 1] === '.') s = s.slice(0, -1);
    
    // 5. 빈 문자열이라면 'a' 대입
    if(s === '') s = 'a';
    
    // 6. 길이가 16자 이상이면 15자까지만 자르고, 끝에 마침표가 있으면 제거
    if(s.length >= 16) s = s.slice(0, 15);
    if(s[s.length - 1] === '.') s = s.slice(0, -1);
    
    // 7. 길이가 2자 이하라면, 마지막 문자를 길이가 3 될때까지 반복
    while(s.length < 3) {
        s += s[s.length - 1];
    }
    
    return s;    
}