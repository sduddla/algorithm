function solution(my_string, index_list) {
    const result = [];
    
    index_list.map((a) => result.push(my_string[a]))
    return result.join('');
}