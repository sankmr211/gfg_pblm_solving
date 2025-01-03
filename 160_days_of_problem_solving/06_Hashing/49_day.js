
// Name: Subarrays with sum K
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/hashing-gfg-160/problem/subarrays-with-sum-k

class Solution {
    countSubarrays(arr, k) {
        // code here
        const prefixSums = new Map();
        let res = 0;
        let currSum = 0;

        for (let val of arr) {
            currSum += val;
            if (currSum === k){
                res++;
            }

            if (prefixSums.has(currSum - k)){
                res += prefixSums.get(currSum - k);
            }

            prefixSums.set(currSum, (prefixSums.get(currSum) || 0) + 1);
        }

        return res;
    }
}

let obj = new Solution();
const arr = [10, 2, -2, -20, 10], k = -10;
let ans = obj.countSubarrays(arr, k)
console.log(ans);