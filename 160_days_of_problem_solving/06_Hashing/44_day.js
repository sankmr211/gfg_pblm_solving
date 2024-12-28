
// Name: Find All Triplets with Zero Sum
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/hashing-gfg-160/problem/find-all-triplets-with-zero-sum

class Solution {
    /**
     * @param {number[]} arr
     * @return {number[][]}
     */
    findTriplets(arr) {
        // write your code here
        const res = [];
        const n = arr.length;
        for (let i = 0; i < n - 2; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (arr[i] + arr[j] + arr[k] === 0) {
                        res.push([i, j, k]);
                    }
                }
            }
        }
        return res;
    }
}

let obj = new Solution();
const arr = [1, -2, 1, 0, 5];
let ans = obj.findTriplets(arr)
console.log(ans);