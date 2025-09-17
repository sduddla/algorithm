function solution(genres, plays) {
    
    // 1. 장르별 총 재생 횟수 구하기
    // 2. 장르별 노래 모으기
    // 3. 장르 - 내림차순 정렬
    // 4. 각 장르에서 내림차순 정렬
    // 5. 각 장르에서 최대 두 곡씩 뽑기
    
    const songs = genres.map((g, i) => ({genre: g, play: plays[i], index: i}));
    
    // 장르별 총 재생 횟수
    const genreTotal = {};
    songs.forEach(song => {
        genreTotal[song.genre] = (genreTotal[song.genre] || 0) + song.play;
    })
    
    // 장르 정렬 - 재생횟수 내림차순
    const sortedGenres = Object.keys(genreTotal).sort((a, b) => genreTotal[b] - genreTotal[a]);
    
    const result = [];
    
    // 각 장르 안에서 노래 정렬하고 최대 2곡 뽑기
    sortedGenres.forEach(genre => {
        const select = songs.filter(song => song.genre === genre).sort((a, b) => b.play - a.play || a.index - b.index).slice(0, 2);
        
        select.forEach(song => result.push(song.index));
    })
    return result;
}