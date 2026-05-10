function solution(arr) {
    let len = 1;
    while (len < arr.length) {
        len *= 2;
    }
    
    // for (let i = arr.length; i < len; i++) {
    //     arr.push(0);
    // }
    // return arr;
    
    return [...arr, ...Array(len - arr.length).fill(0)];
}