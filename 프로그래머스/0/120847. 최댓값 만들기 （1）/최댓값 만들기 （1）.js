function solution(numbers) {
    numbers.sort((a,b) => b-a);
    
    const maxNum = numbers.splice(0,2);
    return maxNum[0] * maxNum[1];
}