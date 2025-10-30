function solution(phone_number) {
    const len = phone_number.length;
    const last4 = phone_number.slice(-4);
    const newCh = '*'.repeat(len - 4);
    return newCh + last4;
    
}