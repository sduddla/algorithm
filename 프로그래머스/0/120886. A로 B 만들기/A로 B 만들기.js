function solution(before, after) {
    let sortedBefore = before.split('').sort().join('');
    let sortedAfter = after.split('').sort().join('');
    
    if(sortedBefore === sortedAfter) {
        return 1;
    } else {
        return 0;
    }
}