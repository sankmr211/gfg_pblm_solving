
// Name: Count Pairs whose sum is less than target
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/two-pointer-technique-gfg-160/problem/count-pairs-whose-sum-is-less-than-target

class Solution {
    countPairs(arr, target) {
        // write your code here
        arr.sort((a, b) => a - b);
        let left = 0, right = arr.length - 1;
        let cnt = 0;

        while (left < right) {
            let sum = arr[left] + arr[right];

            if (sum < target) {
                cnt += right - left;
                left++;
            } 
            else {
                right--;
            }
        }

        return cnt;
    }
}

let obj = new Solution();
const arr = [2, 1, 8, 3, 4, 7, 6, 5], target = 7;
let ans = obj.countPairs(arr,target)
console.log(ans);