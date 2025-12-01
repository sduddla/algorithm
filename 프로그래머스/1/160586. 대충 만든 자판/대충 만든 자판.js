function solution(keymap, targets) {
    let result = []; // 결과
    
    let minPress = {}; // 최소 횟수
    
    for(let keys of keymap) {
        for(let i = 0; i < keys.length; i++) {
            const char = keys[i]; // 현재 문자
            const count = i + 1; // 키 입력 횟수
            
            // minPress에 아직 이 문자가 없거나, count가 더 작으면 업데이트
            if(minPress[char] === undefined || count < minPress[char]) {
                minPress[char] = count;
            }
        }
    }
    
    for(let word of targets) {
        let total = 0;
        let possible = true;
        
        for(let char of word) {
            if(minPress[char] === undefined) {
                possible = false;
                break;
            }
            total += minPress[char];
        }
        if(possible) {
            result.push(total);
        } else {
            result.push(-1);
        }
    }
    return result;
}