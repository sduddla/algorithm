function solution(nums) {
    // N 마리 포켓몬 중에서 N/2 만큼 선택 가능
    // 동일한 종류 포켓몬 뽑을 시, 하나로 처리
    
    // 전체 포켓몬 종류, 중복 제거
    const types = new Set(nums);
    
    // 가져갈 수 있는 마리 수
    const takes = nums.length / 2;
    
    // 전체 포켓몬 개수, 가져갈 수 있는 개수
    return Math.min(types.size, takes);
}