function solution(my_string, alp) {
    
    let result = '';
    
    for(let i = 0; i < my_string.length; i++) {
        let ch = my_string[i];
        
        if(ch === alp) {
            result += ch.toUpperCase();
        } else {
            result += ch;
        }
    }
    return result;
}