function solution(s) {
    // x와 x가 아닌 다른 글자들이 나온 횟수 각각 세기
    // 처음으로 두 횟수가 같아지는 순간, 읽은 문자열 분리
    // 남은 문자열이 있다면, 이것도 분리
    
    let x = ''; // 첫 글자
    let xCount = 0; // x가 나온 횟수
    let otherCount = 0; // x가 아닌 다른 글자들이 나온 횟수
    let result = 0; // 분해한 문자열 개수
    
    // 첫 글자 정하기
    for(let i = 0; i < s.length; i++) {
        if(x === '') { // 첫 글자 안 정했다면
            x = s[i];
            xCount++;
        } else if(s[i] === x) { // x와 같다면
            xCount++;
        } else { // x와 다르다면
            otherCount++;
        }

        if(xCount === otherCount) { // 두 횟수가 같아질 경우
            result++;
            
            // 초기화
            x = '';
            xCount = 0;
            otherCount = 0;
        }
    }
    
    // 남은 문자열이 있다면 이것도 분리
    if(xCount !== 0 || otherCount !== 0) result++;
    
    return result;

}