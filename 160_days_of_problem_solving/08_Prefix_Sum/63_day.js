
// Name: Largest subarray of 0's and 1's
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/prefix-sum-gfg-160/problem/largest-subarray-of-0s-and-1s

class Solution {
    maxLen(arr) {
        // code here
        let mp = new Map();

        let preSum = 0;
        let res = 0;
        for (let i = 0; i < arr.length; i++) {    
            preSum += (arr[i] === 0) ? -1 : 1;
            if (preSum === 0){
                res = i + 1;
            }
    
            if (mp.has(preSum)){
                res = Math.max(res, i - mp.get(preSum));
            }else{
                mp.set(preSum, i);
            }
        }
    
        return res;
    }
}

let obj = new Solution();
const arr = [1, 0, 1, 1, 1, 0, 0];
let ans = obj.maxLen(arr)
console.log(ans);