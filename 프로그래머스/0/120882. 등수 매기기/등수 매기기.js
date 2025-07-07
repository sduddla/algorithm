function solution(score) {
    const avgScoreList = score.map(([english, math]) => (english + math) / 2);
    const sorted = [...avgScoreList].sort((a,b) => b-a);
    return avgScoreList.map((num) => sorted.indexOf(num)+1);
}