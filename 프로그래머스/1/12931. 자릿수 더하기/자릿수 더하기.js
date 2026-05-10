function solution(n)
{
    let sum = 0;
    let nStr = String(n);
    for(let i = 0; i < nStr.length; i++) {
        sum += Number(nStr[i]);
    }
    return sum;
}