// Name: Histogram Max Rectangular Area
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/stack-gfg-160/problem/maximum-rectangular-area-in-a-histogram-1587115620


class Solution {
    nextSmaller(arr){
        const n = arr.length;
    
        const nextS = new Array(n).fill(n);
        const stack = [];
    
        for (let i = 0; i < n; i++) {
            while (stack.length
                   && arr[i] < arr[stack[stack.length - 1]]) {
                   
                nextS[stack.pop()] = i;
            }
            stack.push(i);
        }
    
        return nextS;
    }
    
    prevSmaller(arr) {
        const n = arr.length;
    
        const prevS = new Array(n).fill(-1);
        const stack = [];
    
        for (let i = 0; i < n; i++) {
            while (stack.length
                   && arr[i] < arr[stack[stack.length - 1]]) {
                stack.pop();
            }
            if (stack.length) {
                prevS[i] = stack[stack.length - 1];
            }
            stack.push(i);
        }
    
        return prevS;
    }

    getMaxArea(arr) {
        const prevS = this.prevSmaller(arr);
        const nextS = this.nextSmaller(arr);
        let maxArea = 0;
    
        for (let i = 0; i < arr.length; i++) {
            const width = nextS[i] - prevS[i] - 1;
            const area = arr[i] * width;
            maxArea = Math.max(maxArea, area);
        }
    
        return maxArea;
    }
}

let obj = new Solution();
const arr = [60, 20, 50, 40, 10, 50, 60];
let ans = obj.getMaxArea(arr);
console.log(ans);