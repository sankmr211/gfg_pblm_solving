
// Name: Subarrays with sum K
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/hashing-gfg-160/problem/subarrays-with-sum-k

class Solution {
    countSubarrays(arr, k) {
        // code here
        let res = 0
        for (let i = 0; i < arr.length; i++) {
            let sum = 0
            for (let j = i; j < arr.length; j++) {
                sum += arr[j]
                if(sum === k)
                    res ++
            }
        }
        return res
    }
}

let obj = new Solution();
const arr = [10, 2, -2, -20, 10], k = -10;
let ans = obj.countSubarrays(arr, k)
console.log(ans);