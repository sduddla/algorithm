function solution(array) {
    let fre = {};
    
    for(let num of array) {
        if(fre[num]) {
            fre[num] += 1;
        } else {
            fre[num] = 1;
        }
    }
    
    let maxCount = 0;
    let newArray = [];
    
    for(let num in fre) {
        if(fre[num] > maxCount) {
            maxCount = fre[num];
            newArray = [Number(num)];
        } else if(fre[num] === maxCount) {
            newArray.push(Number(num));
        }
    }
    return newArray.length === 1 ? newArray[0] : -1;
}