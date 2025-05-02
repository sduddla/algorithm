function solution(emergency) {
    const arr = Array.from(emergency).sort((a,b) => b-a);
    return emergency.map((i) => arr.indexOf(i)+1)
}