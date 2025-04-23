function solution(progresses, speeds) {
    // 각 작업이 얼마나 걸리는 지 계산
    let days = [];
    for(let i = 0; i < progresses.length; i++) {
        let leftPercent = 100 - progresses[i];
        let day = Math.ceil(leftPercent / speeds[i]);
        days.push(day);
    }
    
    // 배포 계산
    let answer = [];
    let count = 1;
    
    for(let i = 1; i < days.length; i++) {
        // days[i] 가 3이면 days[0]인 7보다 작다 -> 같이 배포 가능
        if(days[i] <= days[0]) {
            count++;
        } else { // 더 오래 걸리는 기능
            answer.push(count);
            days[0] = days[i] // 기준일 변경
            count = 1;
        }
    }
    // 마지막
    answer.push(count);
    return answer;
}