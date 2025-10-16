class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    constructor(array) {
        this.items = array;
        this.rear = array.length;
    }
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    // front에 해당하는 값 반환
    first() {
        return this.items[this.front];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(cards1, cards2, goal) {
    // cards1 cards2 무조건 앞에서부터
    // queue
    
    
    // cards1 cards2 goal -> queue로
    cards1 = new Queue(cards1);
    cards2 = new Queue(cards2);
    goal = new Queue(goal);
    
    // goal 문자열 순회
    while(!goal.isEmpty()) {
        // cards1의 front와 일치하는 경우
        if(!cards1.isEmpty() && cards1.first() === goal.first()) {
            cards1.pop();
            goal.pop();
        } else if(!cards2.isEmpty() && cards2.first() === goal.first()) { // cards2의 front와 일치하는 경우
            cards2.pop();
            goal.pop();
        } else {
            break;
        }
    }
    return goal.isEmpty() ? 'Yes' : 'No';
    
}