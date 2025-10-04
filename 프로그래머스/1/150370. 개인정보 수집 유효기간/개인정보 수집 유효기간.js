function solution(today, terms, privacies) {
    // 모든 달 28일
    
    // 날짜 일수로
    const days = (date) => {
        const [year, month, day] = date.split('.').map(Number);
        return year * 12 * 28 + month * 28 + day;
    }
    
    // 오늘 날짜 일수로
    const todayDays = days(today);
    
    // 파기 대상 개인정보 번호 담을 배열
    let result = [];
    
    const termsMap = {};
    for(let term of terms) {
        const [type, month] = term.split(' ');
        termsMap[type] = Number(month);
    }
    
    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(' ');
        
        // 개인 정보 수집 일자 일수로
        const collected = days(date);
        
        const expired = collected + termsMap[type] * 28;
        
        if(expired <= todayDays) {
            result.push(index + 1);
        }
    })
    return result;
}