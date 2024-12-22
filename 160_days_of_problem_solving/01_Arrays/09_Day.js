
// Name: Minimize the Heights II
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/minimize-the-heights3351

class Solution {
    getMinDiff(arr, k) {
        // your code here
        let n = arr.length 
        arr.sort((a, b) => a - b)
        let final_res = arr[n - 1] - arr[0]
        let large = arr[n - 1] - k
        let small = arr[0] + k
        let min = 0;
        let max = 0;

        for (let i = 0; i < n - 1; i++) {
            min = Math.min(small, arr[i + 1] - k)
            max = Math.max(large, arr[i] + k)

            if (min < 0) {
                continue;
            }

            final_res = Math.min(final_res, max - min)

        }
        return final_res
    }
}

let obj = new Solution();
let ans = obj.getMinDiff([1, 5, 8, 10], 2);
console.log(ans);