function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;
    
    for(let city of cities) {
        city = city.toLowerCase(); // 대소문자 구분 x - 소문자로 처리
        
        if(cache.includes(city)) {
            // 캐시 히트
            time += 1;
            cache = cache.filter(c => c !== city); // 기존 위치 제거
            cache.push(city); // 맨 뒤로 추가
        } else {
            // 캐시 미스
            time += 5;
            cache.push(city);
            if(cache.length > cacheSize) { // 오래된 거 제거
                cache.shift();
            }
        }
    }
    return time;
}
