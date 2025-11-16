function solution(progresses, speeds) {
    // 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발 가능
    // 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 같이 배포
    
    const result = [];
    
    // 각 기능별로 배포까지 남은 일수 계산
    const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let currentDay = daysLeft[0];
    
    let count = 1; // 배포될 기능 카운트
    for(let i = 1; i < progresses.length; i++) {
        // 앞 기능의 배포일보다 빨리 끝나거나 같이 끝날 경우, 같이 배포 가능
        if(daysLeft[i] <= currentDay) {
            count++;
        } else {
            // 앞 기능보다 늦게 끝날 경우, 지금까지 카운트 결과 배열에 넣고, 기준일 업데이트
            result.push(count);
            currentDay = daysLeft[i];
            count = 1;
        }
    }
    result.push(count);
    return result;
}