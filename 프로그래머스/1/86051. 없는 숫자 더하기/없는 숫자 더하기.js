function solution(numbers) {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(!numbers.includes(nums[i])) {
            result += nums[i];
        }
    }
    
    return result;
}