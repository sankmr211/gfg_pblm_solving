// Name: k largest elements
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/heap-gfg-160/problem/k-largest-elements4206

class Solution {
    kLargest(arr, k) {
        // Your code here
        arr.sort((a, b) => b - a);
        
        let res = arr.slice(0, k);
        return res;
    }
}


let obj = new Solution();
const arr = [12, 5, 787, 1, 23], k = 2
let ans = obj.kLargest(arr, k);
console.log(ans);