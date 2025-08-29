function solution(my_strings, parts) {
    return my_strings.map((str, i) => {
        const [start, end] = parts[i];
        return str.slice(start, end+1);
    }).join('');                      
    
}