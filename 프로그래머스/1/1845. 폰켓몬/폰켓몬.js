function solution(nums) {
    const types = new Set(nums); // 중복 제거
    const take = nums.length / 2; // 가져갈 수 있는 마리 수
    return Math.min(types.size, take);
    
}