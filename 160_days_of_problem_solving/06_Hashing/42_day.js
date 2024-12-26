
// Name: Two Sum - Pair with Given Sum
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/hashing-gfg-160/problem/key-pair5616

class Solution {
    twoSum(arr, target) {
        // code here
        let set = new Set();
        for (let num of arr) {
            let complement = target - num;
            if (set.has(complement)) {
                return true;
            }
            set.add(num);
        }
        return false;
    }
}

let obj = new Solution();
const arr = [1,2,4,3,6], target = 10;
let ans = obj.twoSum(arr, target)
console.log(ans);