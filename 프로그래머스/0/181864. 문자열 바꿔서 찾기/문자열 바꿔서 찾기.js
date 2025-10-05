function solution(myString, pat) {
    let converted = '';
    
    for(let ch of myString) {
        converted += ch === 'A' ? 'B' : ch === 'B' ? 'A' : ch;
    }
    
    return converted.includes(pat) ? 1 : 0;
}