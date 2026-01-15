function solution(binomial) {
    const binomialArr = binomial.split(' ');
    const num1 = parseInt(binomialArr[0]);
    const op = binomialArr[1];
    const num2 = parseInt(binomialArr[2]);
    
    if(op === '+') {
        return num1 + num2;
    } else if(op === '-') {
        return num1 - num2;
    } else if(op === '*') {
        return num1 * num2;
    }
}