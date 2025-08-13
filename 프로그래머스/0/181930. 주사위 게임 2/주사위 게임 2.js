function solution(a, b, c) {
    let sum = a + b + c;
    let sum2 = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    let sum3 = (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
    
    if(a === b &&  b === c ) {
        return sum3;
    } else if(a === b || b === c || a === c) {
        return sum2;
    } else {
        return sum;
    }
}