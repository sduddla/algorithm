function solution(s){
    const arr = s.toLowerCase().split('');
    const p = arr.filter(c => c === 'p').length;
    const y = arr.filter(c => c === 'y').length;
    return p === y;
}