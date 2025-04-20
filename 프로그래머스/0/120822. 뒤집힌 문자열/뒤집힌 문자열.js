function solution(my_string) {
    const splitString = my_string.split('');
    const reverseString = splitString.reverse();
    const joinString = reverseString.join('');
    
    return joinString;
}