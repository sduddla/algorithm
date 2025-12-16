function solution(arr) {
    let count = 0;
    
    while(true) {
        let newArr = [];
        for(let x of arr) {
            if (x >= 50 && x % 2 === 0) {
                newArr.push(x / 2);
            } else if (x < 50 && x % 2 === 1) {
                newArr.push(x * 2 + 1);
            } else {
                newArr.push(x);
            }
        }
        if(arr.join() === newArr.join()) {
            return count;
        }
        
        arr = newArr;
        count++;
    }
}
