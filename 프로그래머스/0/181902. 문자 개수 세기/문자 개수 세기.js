function solution(my_string) {
    let result = Array(52).fill(0);;
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    for(let i = 0; i < my_string.length; i++) {
        const index = al.indexOf(my_string[i]);
        
        if(index !== -1) {
            result[index]++;
        }
    }
    return result;
}