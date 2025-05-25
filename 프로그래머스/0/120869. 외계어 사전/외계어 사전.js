function solution(spell, dic) {
    let word = spell.sort().join('');
    
    for(let n of dic) {
        if(n.length !== spell.length) continue;
        if(n.split('').sort().join('') === word) {
            return 1;
        }
    }
    return 2;
}