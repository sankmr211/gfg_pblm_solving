// Name: Find median in a stream
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/heap-gfg-160/problem/find-median-in-a-stream-1587115620

class Heap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    push(val) {
        this.data.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();

        const top = this.data[0];
        this.data[0] = this.data.pop();
        this._heapifyDown();
        return top;
    }

    peek() {
        return this.data[0] || null;
    }

    size() {
        return this.data.length;
    }

    _heapifyUp() {
        let index = this.data.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.data[parentIndex], this.data[index])) break;
            
            [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.data.length;

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let swapIdx = index;

            if (leftChildIdx < length && !this.compare(this.data[swapIdx], this.data[leftChildIdx])) {
                swapIdx = leftChildIdx;
            }
            if (rightChildIdx < length && !this.compare(this.data[swapIdx], this.data[rightChildIdx])) {
                swapIdx = rightChildIdx;
            }
            if (swapIdx === index) break;

            [this.data[index], this.data[swapIdx]] = [this.data[swapIdx], this.data[index]];
            index = swapIdx;
        }
    }
}

class MaxHeap extends Heap {
    constructor() {
        super((a, b) => a > b); 
    }
}

class MinHeap extends Heap {
    constructor() {
        super((a, b) => a < b);
    }
}

class Solution {
    getMedian(arr) {
        // code here
        let leftMaxHeap = new MaxHeap();
        let rightMinHeap = new MinHeap(); 
        
        let res = [];

        for (let num of arr) {
            leftMaxHeap.push(num);

            rightMinHeap.push(leftMaxHeap.pop());

            if (rightMinHeap.size() > leftMaxHeap.size()) {
                leftMaxHeap.push(rightMinHeap.pop());
            }

            let median;
            if (leftMaxHeap.size() !== rightMinHeap.size()){
                median = leftMaxHeap.peek();
            }
            else{
                median = (leftMaxHeap.peek() + rightMinHeap.peek()) / 2.0;
            }
            
            res.push(median);
        }

        return res;
    }
}

let obj = new Solution();
let arr = [5, 15, 1, 3, 2, 8];
let ans = obj.getMedian(arr);
console.log(ans);