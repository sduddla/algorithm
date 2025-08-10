function solution(a, b) {
    let sa = Number(`${a}${b}`);
    let ab = 2 * a * b;
    return sa >= ab ? sa : ab;
}