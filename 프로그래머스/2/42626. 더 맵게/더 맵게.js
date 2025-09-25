class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    // 값 추가
    push(value) {
        this.heap.push(value); // 끝에 넣기
        let index = this.heap.length - 1;
        
        while(index > 0) { // 부모랑 비교해서 더 작으면 계속 위로 올리기
            let parentIndex = Math.floor((index - 1) / 2);
            if(this.heap[parentIndex] <= this.heap[index]) break;
            
            // 교환
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    // 최소값 꺼내기
    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        let min = this.heap[0]; // 루트값 (제일 작은 값)
        this.heap[0] = this.heap.pop(); // 마지막 원소 루트로
        
        let index = 0;
        while(true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let small = index;
            
            if(left < this.heap.length && this.heap[left] < this.heap[small]) {
                small = left;
            }
            if(right < this.heap.length && this.heap[right] < this.heap[small]) {
                small = right;
            }
            if(small === index) break;
            
            // 교환
            [this.heap[index], this.heap[small]] = [this.heap[small], this.heap[index]];
            index = small;
        }
        
        return min;
    }
    
    // 최소값 반환
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    
    // 힙 크기 반환
    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    // 모든 음식의 스코빌 지수 k 이상으로
    // 섞은 횟수 최소, 불가능 -1
    
    let heap = new MinHeap();
    for(let s of scoville) heap.push(s);
    
    let count = 0;
    while(heap.size() > 1 && heap.peek() < K) {
        let first = heap.pop();
        let second = heap.pop();
        let newFood = first + second * 2;
        heap.push(newFood);
        count++;
    }
    return heap.peek() >= K ? count : -1;
}