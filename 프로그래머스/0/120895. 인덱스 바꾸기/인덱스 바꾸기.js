function solution(my_string, num1, num2) {
    let a = my_string[num1];
    let b = my_string[num2];
    
    let result = my_string.split('');
    
    result[num1] = b;
    result[num2] = a;
    
    return result.join('');
}