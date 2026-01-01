function solution(myString, pat) {
    const a = myString.toLowerCase();
    const b = pat.toLowerCase();
    return a.includes(b) ? 1 : 0;
}