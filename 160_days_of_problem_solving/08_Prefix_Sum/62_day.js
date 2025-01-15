
// Name: Longest Subarray with Sum K
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/prefix-sum-gfg-160/problem/longest-sub-array-with-sum-k0809

class Solution {
    longestSubarray(arr, k) {
        // code here
        let mp = new Map();
        let res = 0;
        let prefSum = 0;
    
        for (let i = 0; i < arr.length; ++i) {
            prefSum += arr[i];
    
            if (prefSum === k) 
                res = i + 1;
    
            else if (mp.has(prefSum - k)) 
                res = Math.max(res, i - mp.get(prefSum - k));
    
            if (!mp.has(prefSum)) 
                mp.set(prefSum, i);
        }
    
        return res;
    }
}


let obj = new Solution();
const arr = [10, 5, 2, 7, 1, -10], k = 15;
let ans = obj.longestSubarray(arr, k)
console.log(ans);