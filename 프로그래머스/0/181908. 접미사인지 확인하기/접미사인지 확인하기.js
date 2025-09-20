function solution(my_string, is_suffix) {
    
    for(let i = 0; i < my_string.length; i++) {
        if(my_string.endsWith(is_suffix)) {
            return 1;
        } else {
            return 0;
        }
    }
}