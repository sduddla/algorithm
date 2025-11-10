function solution(n,a,b)
{
    // 12 34 56 78
    // 1/2 4 5/6 7
    // 4 7
    // ?
    
    let round = 1;
    while(true) {
        if(Math.ceil(a / 2) === Math.ceil(b / 2)) break;
        
        // 다음 라운드로
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        
        round++;
    }
    return round;
}