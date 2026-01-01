function solution(strArr) {
    let result = [];
    
    for(let i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) {
            result.push(strArr[i].toLowerCase());
        } else {
            result.push(strArr[i].toUpperCase());
        }
    }
    return result;
}