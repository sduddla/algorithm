function solution(n, lost, reserve) {
    // 바로 앞번호, 바로 뒷번호 체육복 빌려주기 가능
    // 여벌 체육복 있는 학생만 다른 학생에게 빌려주기 가능
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    // 여벌 가져왔지만 도난당한 학생은 빌려줄 수 없으니 제외
    let realLost = lost.filter((l) => !(reserve.includes(l)));
    
    // 빌려줄 수 있는 학생 목록
    let realReserve = reserve.filter((r) => !(lost.includes(r)));
    
    let student = n - realLost.length; // 수업 들을 수 있는 학생
    
    for(let num of realLost) {
        // 앞 번호 학생이 빌려줄 경우
        if(realReserve.includes(num - 1)) {
            realReserve = realReserve.filter((r) => r !== num - 1); // 빌려주고 제거
            student++;
        } else if(realReserve.includes(num + 1)) { // 뒷 번호 학생이 빌려줄 경우
            realReserve = realReserve.filter((r) => r !== num + 1);
            student++;
        }
    }
    
    return student;
}