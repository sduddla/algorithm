function solution(array) {
    const array_sort = array.sort((a, b) => a - b);
    const num = parseInt(array_sort.length/2);
    return array_sort[num];

}