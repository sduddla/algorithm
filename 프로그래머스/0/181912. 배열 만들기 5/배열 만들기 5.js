function solution(intStrs, k, s, l) {
    let answer = [];
    
    intStrs.map((item) => {
        let sliced = item.slice(s, s+l);
        let newNum = Number(sliced);
        
        if(newNum > k) {
            answer.push(newNum);
        }
    })
    return answer;
}