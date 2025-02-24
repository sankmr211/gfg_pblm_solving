// Name: Stock span problem
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/stack-gfg-160/problem/stock-span-problem-1587115621


class Solution {
    calculateSpan(arr) {
        // write code here
        let n = arr.length;
        let span = new Array(n);
        let stk = [];
        for (let i = 0; i < n; i++) {
    
            while (stk.length > 0
                   && arr[stk[stk.length - 1]] <= arr[i]) {
    
                stk.pop();
            }
    
            if (stk.length === 0) {
                span[i] = (i + 1);
            }
            else {
                span[i] = (i - stk[stk.length - 1]);
            }
    
            stk.push(i);
        }
    
        return span;
    }
}

let obj = new Solution();
let arr = [ 10, 4, 5, 90, 120, 80 ];
let ans = obj.calculateSpan(arr);
console.log(ans);