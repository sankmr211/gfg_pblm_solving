
// Name: Count pairs with given sum
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/hashing-gfg-160/problem/count-pairs-with-given-sum--150253

class Solution {
    countPairs(arr, target) {
        // write your code here
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
const arr = [1, 1, 1, 1], target = 2;
let ans = obj.countPairs(arr, target)
console.log(ans);