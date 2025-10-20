function isEqual(object1, object2) {
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
    
    // 두 오브젝트 길이가 다르다면 false
    if(objKeys1.length !== objKeys2.length) {
        return false;
    }
    
    for(const key of objKeys1) {
        const value1 = object1[key];
        const value2 = object2[key];
        
        if(value1 !== value2) {
            return false;
        }
    }
    return true;
}

function solution(want, number, discount) {
    // 특정일에 회원가입 해서 그날부터 10일간 쇼핑을 할 때 구매하려는 제품을 모두 할인받아서 살 수 있는 지 확인하고, 특정일을 세서 반환하기
    // want, 원하는 제품을 나타내는 문자열 배열
    // number, 원하는 제품의 수량을 나타내는 정수 배열
    // discount, 마트에서 할인하는 제품을 나타내는 문자열 배열
    
    // want 배열 오브젝트로 변환
    const wantObj = {};
    for(let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }
    
    let result = 0;
    
    // 특정일 i에 할인받을 수 있는 품목 체크
    for(let i = 0; i < discount.length - 9; i++) {
        const discountObj = {};
        
        // i일 회원가입 시 할인받는 제품 또는 개수로 오브젝트 구성
        for(let j = i; j < i + 10; j++) {
            if(wantObj[discount[j]]) {
                discountObj[discount[j]] = (discountObj[discount[j]] || 0) + 1;
            }
        }
        
        // 할인하는 상품의 개수가 원하는 수량과 같으면 1 추가
        if(isEqual(discountObj, wantObj)) {
            result += 1;
        }
    }
    return result;
}