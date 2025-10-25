function solution(record) {
    // 최종적으로 방을 개설한 사람이 보게 되는 메시지 반환
    // 닉네임 Enter Change
    
    let result = []; // 최종 결과
    let obj = {};
    
    for(const line in record) {
        let str = record[line].split(' ');
        if(str[0] !== 'Leave') {
            obj[str[1]] = str[2];
        }
    }
    
    for(const line in record) {
        let str = record[line].split(' ');
        if(str[0] === 'Enter') {
            result.push(obj[str[1]] + '님이 들어왔습니다.');
        } else if(str[0] === 'Leave') {
            result.push(obj[str[1]] + '님이 나갔습니다.')
        }
    }
    return result;
}