
// Name: Aggressive Cows
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/searching-gfg-160/problem/aggressive-cows

class Solution {
    // Function to solve the problem.
    aggressiveCows(stalls, k) {
        // your code here
        function check(stalls, k, dist) {

            let cnt = 1;
            let prev = stalls[0];
            for (let i = 1; i < stalls.length; i++) {

                if (stalls[i] - prev >= dist) {
                    prev = stalls[i];
                    cnt++;
                }
            }

            return (cnt >= k);
        }

        stalls.sort((a, b) => a - b);
        let res = 0;
        let lo = 1;
        let hi = stalls[stalls.length - 1] - stalls[0];

        while (lo <= hi) {
            let mid = Math.floor(lo + (hi - lo) / 2);
            if (check(stalls, k, mid)) {
                res = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return res;
    }
}

let obj = new Solution();
const arr = [1, 2, 4, 8, 9], k = 3;
let ans = obj.aggressiveCows(arr, k)
console.log(ans);