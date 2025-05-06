function solution(array, n) {
    let answer = [];
    array.sort((a,b) => a-b);
    
    for(let i of array) {
        answer.push(Math.abs(i-n));
    }
    
    let num = answer.indexOf(Math.min(...answer));
    return array[num];
}