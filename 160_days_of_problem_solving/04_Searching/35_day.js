
// Name: Kth Missing Positive Number in a Sorted Array
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/searching-gfg-160/problem/kth-missing-positive-number-in-a-sorted-array

class Solution {
    kthMissing(arr, k) {
        // code here
        let s = new Set(arr);

        let count = 0;
        let curr = 0;

        while (count < k) {
            curr++;

            if (!s.has(curr)) {
                count++;
            }
        }
        return curr;
    }
}

let obj = new Solution();
const arr = [2, 3, 4, 7, 11], k = 5;
let ans = obj.kthMissing(arr, k)
console.log(ans);