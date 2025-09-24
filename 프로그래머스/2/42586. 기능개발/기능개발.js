function solution(progresses, speeds) {
    // progresses - 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
    // speeds - 각 작업의 개발 속도가 적힌 정수 배열
    // 각 배포마다 몇 개의 기능이 배포되는 지 return
    
    // 각 작업이 얼마나 걸리는 지
    let days = [];
    for(let i = 0; i < progresses.length; i++) {
        let leftPercent = 100 - progresses[i];
        let day = Math.ceil(leftPercent / speeds[i]);
        days.push(day);
    }
    
    // 배포
    let result = [];
    let count = 1;
    for(let i = 1; i < days.length; i++) {
        if(days[i] <= days[0]) { // 현재 기능이 기준 기능보다 늦게 끝나지 않으면(같이 배포 가능)
            count++; // 카운트
        } else { // 현재 기능이 기준 기능보다 늦게 끝날 경우
            result.push(count); // 지금까지 모은 기능 배포
            days[0] = days[i]; // 기준일 업데이트
            count = 1; // 새 배포 시작
        }
    }
    
    result.push(count); // 마지막 배포
    return result;
}