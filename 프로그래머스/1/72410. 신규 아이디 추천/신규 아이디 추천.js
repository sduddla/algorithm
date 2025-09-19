function solution(new_id) {
  let s = new_id;
    
  // 1. 모든 대문자를 소문자로 변환
  s = s.toLowerCase();
    
  // 2. 허용된 문자(소문자, 숫자, '-', '_', '.')만 남기기
  let temp = '';
  
  for(let ch of s) {
    if((ch >= 'a' && ch <= 'z') || 
       (ch >= '0' && ch <= '9') ||
       (ch === '-' || ch === '_' || ch === '.')) {
      temp += ch;  
    }
  }
  s = temp;
    
  // 3. 마침표가 연속되면 하나로 치환
  temp = '';
  
  for(let i = 0; i < s.length; i++) {
    
    // 연속된 마침표가 아니라면
    if(!(s[i] === '.' && temp[temp.length - 1] === '.')) { 
      temp += s[i];
    }
  }
    
  s = temp;
    
  // 4. 마침표가 처음이나 끝에 있으면 제거
  if(s[0] === '.') s = s.slice(1);
  if(s[s.length - 1] === '.') s = s.slice(0, -1);
    
  // 5. 빈 문자열이면 'a' 대입
  if(s === '') s = 'a';
    
  // 6. 길이가 16자 이상이면 15자까지만 자르고, 끝에 마침표가 있으면 제거
  if(s.length >= 16) s = s.slice(0, 15);
  if(s[s.length - 1] === '.') s = s.slice(0, -1);
    
  // 7. 길이가 2자 이하라면, 마지막 문자를 길이가 3 될 때까지 반복
  while(s.length < 3) {
    s += s[s.length - 1];
  }
    
  return s;    
}