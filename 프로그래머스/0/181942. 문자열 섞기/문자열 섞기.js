function solution(str1, str2) {
    let a = str1.split('');
    let b = str2.split('');
    let result = '';
    
    for(let i=0; i<a.length; i++) {
        result += a[i] + b[i];
    }
    return result;
}