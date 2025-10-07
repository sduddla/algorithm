function solution(my_string, indices) {
    let arr = my_string.split('');
    
    indices.sort((a, b) => b - a);
    
    for(let i = 0; i < indices.length; i++) {
        arr.splice(indices[i], 1);
    }
    return arr.join('');
}