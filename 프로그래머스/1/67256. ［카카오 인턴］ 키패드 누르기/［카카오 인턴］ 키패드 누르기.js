function solution(numbers, hand) {
    // 엄지손가락, 상하좌우 4가지 방향으로만 이동, 한 칸 거리 1
    // 1, 4, 7 - 왼손 엄지 손가락
    // 3, 6, 9 - 오른손 엄지손가락
    // 2, 5, 8, 0 - 더 가까운 엄지손가락 사용 / 거리 같으면 오른손잡이는 오른손 왼손잡이는 왼손
    // numbers 순서대로 누를 번호가 담긴 배열
    // hand 왼손잡이인지 오른손잡이인 지 나타내는 문자열
    
    let left = '*';
    let right = '#';
    let result = '';
    
    const position = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2],
    }
    
    for(let num of numbers) {
        if([1, 4, 7].includes(num)) { // 왼손
            result += 'L';
            left = num;
        } else if([3, 6, 9].includes(num)) { // 오른손
            result += 'R';
            right = num;
        } else {
            // 2, 5, 8, 0
            const [leftX, leftY] = position[left];
            const [rightX, rightY] = position[right];
            const [numX, numY] = position[num];
            
            const leftDistance = Math.abs(leftX - numX) + Math.abs(leftY - numY);
            const rightDistance = Math.abs(rightX - numX) + Math.abs(rightY - numY);
            
            if(leftDistance < rightDistance) {
                result += 'L';
                left = num;
            } else if(rightDistance < leftDistance) {
                result += 'R';
                right = num;
            } else {
                if(hand === 'left') { // 왼손잡이
                    result += 'L';
                    left = num;
                } else { // 오른손잡이
                    result += 'R';
                    right = num;
                }   
            }
        }
    }
    return result;
}