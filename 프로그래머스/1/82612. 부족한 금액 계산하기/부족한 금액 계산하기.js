function solution(price, money, count) {
    let sum = 0;
    
    for(let i = 1; i <= count; i++) {
        sum += price * i;
    }
    
    let result = sum - money;
    return result > 0 ? result : 0;
    
}