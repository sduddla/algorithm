function solution(chicken) {
    let count = 0; // 최대 받은 서비스 치킨의 수
    
    while(chicken >= 10) {
        count += Math.floor(chicken / 10); // 서비스 치킨 수 누적
        chicken = chicken % 10 + Math.floor(chicken / 10); // 남은 쿠폰 + 새로 받은 치킨으로 생긴 쿠폰
        
    }
    return count;
}