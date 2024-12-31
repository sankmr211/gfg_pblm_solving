
// Name: Longest Consecutive Subsequence
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/hashing-gfg-160/problem/longest-consecutive-subsequence2449

class Solution {
    // Function to return length of longest subsequence of consecutive integers.
    longestConsecutive(arr) {
        // code here
        arr.sort((a, b) => a - b);
        let res = 1, cnt = 1;

        for (let i = 1; i < arr.length; i++) {
            
            if (arr[i] === arr[i - 1])
                continue;

            if (arr[i] === arr[i - 1] + 1) {
                cnt++;
            } 
            else {
                cnt = 1;
            }

            res = Math.max(res, cnt);
        }
        return res;
    }
}


let obj = new Solution();
const arr = [2, 6, 1, 9, 4, 5, 3];
let ans = obj.longestConsecutive(arr)
console.log(ans);