function getGCD(a, b) {
    let gcd = 1;
    for(let i=2; i<=Math.min(a,b); i++) {
       if(a % i === 0 && b % i === 0) {
           gcd = i;
       }
    }
    return gcd;
}

function solution(a, b) {
    const gcd = getGCD(a,b);
    let bb = b / gcd;
    
    while(bb % 2 === 0) {
        bb = bb / 2;
    }
    while(bb % 5 === 0) {
        bb = bb / 5;
    }
    return bb === 1 ? 1 : 2;
}