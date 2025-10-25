function solution(genres, plays) {
    // 재생 횟수, 내림차순 정렬
    // 장르 별로 가장 많이 재생된 노래를 최대 두 개까지 모아 베스트 앨범 출시
    
    let result = []; // 결과
    let genresObj = {};
    let playsObj = {};
    
    // 장르 별 재생 횟수, 각 곡의 재생 횟수 저장
    for(let i = 0; i < genres.length; i++) {
        genre = genres[i];
        play = plays[i];
        
        if(!(genre in genresObj)) {
            genresObj[genre] = [];
            playsObj[genre] = 0;
        }
        
        genresObj[genre].push([i, play]);
        playsObj[genre] += play;
        
        
    }
    
    // 총 재생 횟수 내림차순
    let sortedGenres = Object.keys(playsObj).sort((a, b) => {
        return playsObj[b] - playsObj[a];
    })
    
    // 장르 별로 가장 많이 재생된 노래 최대 두 개까지 선택
    // 장르 내에서 재생 횟수 같으면 오름차순, 아니면 내림차순
    for(const genre of sortedGenres) {
        let sortedSongs = genresObj[genre].sort((a, b) => {
            return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
        });
        
        result.push(...sortedSongs.slice(0, 2).map((song) => song[0]));
    }
    return result;
}