function solution(users, emoticons) {
    const discounts = [10, 20, 30, 40]; // 모든 할인율
    
    let result = [0, 0]; // [가입자 수, 총 판매액]
    
    function dfs(index, applied) { // 이모티콘 할인율 하나씩 정해가기
        if(index === emoticons.length) { // 모든 이모티콘에 할인율 다 정했을 때
            let sign = 0; // 가입자 수
            let sales = 0; // 판매액
            
            for(const [minDiscount, minPrice] of users) {
                let total = 0; // 사용자가 실제 결제할 전체 금액
                
                for(let i = 0; i < emoticons.length; i++) { // 사용자가 살 수 있는 이모티콘 가격
                    if(applied[i] >= minDiscount) { // 최소 할인율 이상이면 구매
                        total += emoticons[i] * (100 - applied[i]) / 100;
                    }
                }
                if(total >= minPrice) {
                    sign++; // 기준 넘으면 가입
                } else {
                    sales += total; // 아니면 매출에 추가
                }
            }
            // 가입자 수 최대, 가입자 수 같으면 매출액 최대
            if(sign > result[0] || (sign === result[0] && sales > result[1])) {
                result = [sign, sales];
            }
            return;
        }
        
        // 아직 모든 이모티콘에 할인율 적용 x -> 이번 이모티콘에 10%, 20%, 30%, 40% 중 하나 적용
        for(let d of discounts) { 
            applied[index] = d;
            dfs(index + 1, applied); // 다음 이모티콘으로 이동
        }
    }
    
    dfs(0, Array(emoticons.length).fill(0)); // dfs 시작, 0으로
    return result;
}