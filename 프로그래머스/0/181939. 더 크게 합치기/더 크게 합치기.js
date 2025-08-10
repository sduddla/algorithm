function solution(a, b) {
    let sa = String(a);
    let sb = String(b);
    let aresult = sa + sb;
    let bresult = sb + sa;
    
    if(aresult > bresult) {
        return Number(aresult);
    } else if(bresult > aresult) {
        return Number(bresult);
    } else {
        return Number(aresult);
    }
}