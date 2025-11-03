function solution(id_list, report, k) {
    // report, 이용자id 신고한id
    
    const result = []; // 결과 반환할 배열
    const reportedUsers= {}; // 신고당한 유저
    const count = {}; // 처리 결과 메일 받은 유저 카운트
    
    for(let r of report) {
        const [userId, reportedId] = r.split(' ');
        if(reportedUsers[reportedId] === undefined) { // 신고당한 유저가 없을 경우
            reportedUsers[reportedId] = new Set(); // 빈 집합으로
        }
        reportedUsers[reportedId].add(userId);
    }
    
    // 신고당한 유저별로 신고당한 횟수 확인
    for(const reportedId of Object.keys(reportedUsers)) {
        if(reportedUsers[reportedId].size >= k) {
            for(const cnt of reportedUsers[reportedId]) {
                count[cnt] = (count[cnt] || 0) + 1;
            }
        }
    }
    
    for(let i = 0; i < id_list.length; i++) {
        result.push(count[id_list[i]] || 0);
    }
    
    return result;
    
}