// Name: Maximum of minimum for every window size
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/stack-gfg-160/problem/maximum-of-minimum-for-every-window-size3453


class Solution {
    maxOfMins(arr) {
        let n = arr.length;
        let res = new Array(n).fill(0);
        let s = [];
    
        let len = new Array(n).fill(0);
    
        for (let i = 0; i < n; i++) {
    
            while (s.length > 0 && arr[s[s.length - 1]] >= arr[i]) {
                let top = s.pop();
                let windowSize = s.length === 0 ? i : i - s[s.length - 1] - 1;
                len[top] = windowSize;
            }
            s.push(i);
        }
    
        while (s.length > 0) {
            let top = s.pop();
            let windowSize = s.length === 0 ? n : n - s[s.length - 1] - 1;
            len[top] = windowSize;
        }
    
        for (let i = 0; i < n; i++) {
            let windowSize = len[i] - 1;
            res[windowSize] = Math.max(res[windowSize], arr[i]);
        }
    
        for (let i = n - 2; i >= 0; i--) {
            res[i] = Math.max(res[i], res[i + 1]);
        }
    
        return res;
    }
}

let obj = new Solution();
const arr = [10, 20, 30, 50, 10, 70, 30];
let ans = obj.maxOfMins(arr);
console.log(ans);