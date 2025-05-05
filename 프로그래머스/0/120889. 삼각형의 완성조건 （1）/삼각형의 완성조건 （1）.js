function solution(sides) {
    const num = sides.sort((a,b) => a-b);
    return num[0]+num[1] > num[2] ? 1 : 2;
}