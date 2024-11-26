
// Name: Max Circular Subarray Sum
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/max-circular-subarray-sum-1587115620

class Solution {
    circularSubarraySum(arr) {
        // code here
        let n = arr.length;
        let suff_sum = arr[n - 1];

        let max_suff = new Array(n + 1).fill(0);
        max_suff[n - 1] = arr[n - 1];
    
        for(let i = n - 2; i >= 0; i--) {
            suff_sum += arr[i];
            max_suff[i] = Math.max(max_suff[i + 1], suff_sum);
        }

        let cir_sum = arr[0];

        let nor_sum = arr[0];
    
        let curr_sum = 0;
        let prefix = 0;
    
        for(let i = 0; i < n; i++) {
            curr_sum = Math.max(curr_sum + arr[i], arr[i]);
            nor_sum = Math.max(nor_sum, curr_sum);
            prefix += arr[i];
            cir_sum = Math.max(cir_sum, prefix + max_suff[i + 1]);
        }
    
        return Math.max(cir_sum, nor_sum);
    }
}

let obj = new Solution();
let ans = obj.circularSubarraySum([-1, 40, -14, 7, 6, 5, -4, -1]);
console.log(ans);