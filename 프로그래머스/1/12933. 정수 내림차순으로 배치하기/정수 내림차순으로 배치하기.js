function solution(n) {
    const nArr = n.toString().split('');
    const nArrSort = nArr.sort((a, b) => b - a);
    return parseInt(nArrSort.join(''));
}