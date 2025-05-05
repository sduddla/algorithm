function solution(my_string) {
    return my_string.split('').filter(v => !isNaN(v)).map(Number).sort((a,b) => a-b);
}