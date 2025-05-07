function solution(my_string) {
    const a = my_string.split(' ');
    let n = Number(a[0]);
    
    a.forEach((item, index) => {
        if(item === '+') {
            n += Number(a[index+1]);
        } else if(item === '-') {
            n -= Number(a[index+1]);
        }
    })
    return n;
}