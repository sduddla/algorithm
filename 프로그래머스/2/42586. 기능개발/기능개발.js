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
        if(days[i] <= days[0]) {
            count++;
        } else {
            result.push(count);
            days[0] = days[i];
            count = 1;
        }
    }
    
    result.push(count);
    return result;

}