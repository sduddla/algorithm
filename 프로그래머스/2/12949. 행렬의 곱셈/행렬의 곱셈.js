function solution(arr1, arr2) {
    
    const a1 = arr1.length; // arr1 행 개수
    const b1 = arr1[0].length; // arr1 열 개수
    
    const a2 = arr2.length; // arr2 행 개수
    const b2 = arr2[0].length; // arr2 열 개수
    
    const result = [];
    for(let i = 0; i < a1; i++) {
        result.push(new Array(b2).fill(0)); // 0으로
    }
    
    for(let i = 0; i < a1; i++) { // arr1 행
        for(let j = 0; j < b2; j++) { // arr2 열
            for(let k = 0; k < b1; k++) { // arr1 행과 arr2 열 같을 경우
                    result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return result;
}