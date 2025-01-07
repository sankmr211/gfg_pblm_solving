
// Name: Pair with given sum in a sorted array
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/two-pointer-technique-gfg-160/problem/pair-with-given-sum-in-a-sorted-array4940

class Solution {
    countPairs(arr, target) {
        // code here
        const freq = new Map();
        let count = 0;
    
        for (let i = 0; i < arr.length; i++) {
            
            if (freq.has(target - arr[i])) {
                count += freq.get(target - arr[i]); 
            }
            
            freq.set(arr[i], (freq.get(arr[i]) || 0) + 1); 
        }
        return count;
    }
}

let obj = new Solution();
const arr = [-1, 1, 5, 5, 7], target = 6;
let ans = obj.countPairs(arr, target)
console.log(ans);