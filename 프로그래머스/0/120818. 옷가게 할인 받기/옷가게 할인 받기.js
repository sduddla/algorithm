function solution(price) {
    if(price >= 100000 && price < 300000) {
        return Math.floor(0.95 * price);
    } else if(price >= 300000 && price < 500000 ) {
        return Math.floor(0.9 * price);
    } else if(price >= 500000) {
        return Math.floor(0.8 * price);
    } else {
        return price;
    }
}