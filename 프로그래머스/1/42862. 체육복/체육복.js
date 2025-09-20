function solution(n, lost, reserve) {
    // 정렬
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    // 여벌 가져왔지만 도난당한 학생
    let realLost = lost.filter(l => !(reserve.includes(l)));
    let realReserve = reserve.filter(r => !(lost.includes(r)));
    
    // 수업 들을 수 있는 학생
    let cnt = n - realLost.length;
    
    // 체육복 빌려주기
    for(let num of realLost) {
        // 앞 번호 학생이 빌려줌
        if(realReserve.includes(num - 1)) {
            realReserve = realReserve.filter(r => r !== num - 1); // 빌려주고 제거
            cnt++;
        } else if(realReserve.includes(num + 1)) {
            realReserve = realReserve.filter(r => r !== num + 1);
            cnt++;
        }
    }
    return cnt;
}