
// Name: Kadane's Algorithm
// Link: https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

class Solution {
    maxSubarraySum(arr) {
        // code here
        let cur_sum = 0
        let max_sum = -Math.pow(10, 9)

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            
            cur_sum = element + cur_sum

            if(cur_sum < element){
                cur_sum = element
            }

            if(cur_sum > max_sum){
                max_sum = cur_sum
            }       
        }
        return max_sum
    }
}

let obj = new Solution();
let ans = obj.maxSubarraySum([5, 4, 1, 7, 8]);
console.log(ans);