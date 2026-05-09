function solution(num_list) {
    num_list.sort((a, b) => a - b);
    let result = [];
    
    for(let i = 5; i < num_list.length; i++) {
        result.push(num_list[i]);
    }
    return result;
}