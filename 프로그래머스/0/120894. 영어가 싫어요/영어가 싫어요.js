function solution(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    arr.forEach((str, index) => {
        numbers = numbers.replaceAll(str, index);
    })
    return Number(numbers);
}