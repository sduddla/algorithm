function solution(arr, flag) {
    // flag[i] === true, 추가
    // flag[i] === false, 삭제
    
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            for(let j = 0; j < arr[i] * 2; j++) {
                result.push(arr[i]);
            }
        } else {
            result.splice(result.length - arr[i], arr[i]);
        }
    }
    return result;
}