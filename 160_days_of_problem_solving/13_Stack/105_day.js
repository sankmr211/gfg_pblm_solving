// Name: Get Min from Stack
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/stack-gfg-160/problem/get-minimum-element-from-stack


class Solution {
    constructor() {
        this.s = [];
        this.minEle = -1;
    }

    push(x) {
        if (this.s.length === 0) {
            this.minEle = x;
            this.s.push(x);
        }
        else if (x < this.minEle) {
            this.s.push(2 * x - this.minEle);
            this.minEle = x;
        } else {
            this.s.push(x);
        }
    }

    pop() {
        if (this.s.length === 0) {
            return;
        }

        let top = this.s.pop();

        if (top < this.minEle) {
            this.minEle = 2 * this.minEle - top;
        }
    }

    peek() {
        if (this.s.length === 0) {
            return -1;
        }

        let top = this.s[this.s.length - 1];

        return this.minEle > top ? this.minEle : top;
    }

    getMin() {
        if (this.s.length === 0) {
            return -1;
        }

        return this.minEle;
    }
}

let obj = new Solution();
obj.push(2);
obj.push(3);
console.log(obj.peek(), " ");
obj.pop();
console.log(obj.getMin(), " ");
obj.push(1);
console.log(obj.getMin(), " ");