
// Name: Count Subarrays with given XOR
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/hashing-gfg-160/problem/count-subarray-with-given-xor

class Solution {
    subarrayXor(arr, k) {
        // your code here
        const prefixSums = new Map();
        let res = 0;
        let prefXOR = 0;

        for (const val of arr) {
            prefXOR ^= val;    
            res += prefixSums.get(prefXOR ^ k) || 0;    
            if (prefXOR === k){
                res++;    
            }
            prefixSums.set(prefXOR, (prefixSums.get(prefXOR) || 0) + 1);
        }        
        return res
    }
}

let obj = new Solution();
const arr = [5, 6, 7, 8, 9], k = 5;
let ans = obj.subarrayXor(arr, k)
console.log(ans);