function solution(arr) {
    let result = [];
    
    let start = arr.indexOf(2);
    let end = arr.lastIndexOf(2);
    
    if(start === -1) return [-1];
    
    return arr.slice(start, end + 1);
}