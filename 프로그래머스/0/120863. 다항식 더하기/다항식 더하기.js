function solution(polynomial) {
    let xSum = 0;
    let nSum = 0;
    
    let ps = polynomial.split(' + ');
    
    for(let a of ps) {
        if(a.includes('x')) {
            let num = a.replace('x', '');
            xSum += num === '' ? 1 : parseInt(num);
        } else {
            nSum += parseInt(a);
        }
    }
    
    if(xSum && nSum) return  `${xSum === 1 ? '' : xSum}x + ${nSum}`;
    if(xSum) return  `${xSum === 1 ? '' : xSum}x`;
    return `${nSum}`;
}
