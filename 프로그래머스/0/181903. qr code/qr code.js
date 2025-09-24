function solution(q, r, code) {
    let codeArr = code.split(''); // 배열로
    let result = '';
    
    
    for(let i = 0; i < codeArr.length; i++) {
        if(i % q === r) {
            result += codeArr[i];
        }
    }
    return result;
    
}