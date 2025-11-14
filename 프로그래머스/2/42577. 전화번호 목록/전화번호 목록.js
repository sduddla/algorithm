function solution(phone_book) {
    // phone_book 정렬
    phone_book.sort();
    
    // phone_book 0번째와 그 다음 번호들 앞부분 비교
    // 겹치면 false
    // 겹치는게 없으면 true
    
    for(let i = 0; i < phone_book.length - 1; i++) {
        if(phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}