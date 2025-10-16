// 다리
class Queue {
    items = []; // 다리 위 트럭 저장할 배열
    front = 0;
    rear = 0;
    
    push(item) { // 트럭 다리 위로
        this.items.push(item);
        this.rear++;
    }
    
    pop() { // 다리에서 트럭 내려감
        this.rear--;
        return this.items.shift();
    }
    
    size() { // 현재 다리 위 트럭 수
        return this.items.length;
    }
    
    first() { // 가장 먼저 올라간 트럭 보기
        return this.items[0];
    }
}

function solution(bridge_length, weight, truck_weights) {
    let time = 0; // 전체 시간
    let totalWeight = 0; // 다리 위 총 무게
    
    const bridge = new Queue(); // 다리 큐
    
    // 트럭 대기중이거나 다리 위에 남아 있다면
    while(truck_weights.length > 0 || bridge.size() > 0) {
        time++;
        
        // 다리 위 트럭 이동 (시간 경과 -> 한 칸 앞으로)
        if(bridge.size() > 0 && bridge.first().time === bridge_length) {
            totalWeight -= bridge.pop().weight;
        }
        
        // 다리에 새 트럭을 올릴 수 있을 지 확인
        // 아직 대기 중인 트럭이 있고, 다리 무게 한도 초과 안하고, 다리 길이 한도 초과 안하면
        if(truck_weights.length > 0 && totalWeight + truck_weights[0] <= weight && bridge.size() < bridge_length) {
            const nextTruck = truck_weights.shift(); // 트럭 한 대 꺼내기
            bridge.push({weight: nextTruck, time: 0}); // 다리 위로 올리기
            totalWeight += nextTruck; // 총 무게 업데이트
        }
        
        // 다리 위 트럭들의 경과 시간 업데이트
        bridge.items = bridge.items.map((truck) => ({
            ...truck,
            time: truck.time + 1
        }))
    }
    return time;
}