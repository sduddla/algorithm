function solution(s) {
    const arr = s.split(' ').map(Number).sort((a, b) => a - b);
    const min = arr[0];
    const max = arr[arr.length - 1];
    return `${min} ${max}`;
}