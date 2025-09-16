function solution(clothes) {
    // [의상의 이름, 의상의 종류]
    
    // 입출력 1
    // headgear - 2개 + 1개 (안 쓸 수도) - 3개
    // eyewear - 1개 + 1개 (안 낄 수도) - 2개
    // 모든 경우의 수 3 * 2 = 6
    // 모두 안 입음 제외  6 - 1 = 5
    
    const map = new Map();
    
    for(const [item, type] of clothes) {
        // map.get(type) -> 해당 종류의 옷 개수 가져오기
        // 값이 없을 경우 -> 0으로 대체
        // 새 옷 한 벌 추가
        map.set(type, (map.get(type) || 0) + 1); 
    }
    
    let answer = 1;
    
    // 각 종류별 옷 개수에 안 입는 경우(+1) 더한 값을 곱함
    for(const count of map.values()) {
        answer *= (count + 1);
    }
    
    return answer - 1; // 모두 안 입음 제외
}