function solution(phone_book) {
    // phone_book 전화번호부에 적힌 전화번호
    
    phone_book.sort(); // ["119", "1195524421", "97674223"]
    
    for(let i = 0; i < phone_book.length-1; i++) {
        if(phone_book[i+1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}