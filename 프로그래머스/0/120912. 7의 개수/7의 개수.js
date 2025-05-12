function solution(array) {
    let count = 0;
    
    array.forEach((item) => {
        let arr = String(item).split('');
        arr.forEach((item) => {
            if(item === "7") {
                count++;
            }
        })
    })
    return count;
}