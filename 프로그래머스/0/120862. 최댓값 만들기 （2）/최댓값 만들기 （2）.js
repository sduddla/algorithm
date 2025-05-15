function solution(numbers) {
    numbers.sort((a,b) => a-b);
    let a = numbers[0] * numbers[1];
    let b = numbers[numbers.length-1] * numbers[numbers.length-2];
    return a > b ? a : b;
}