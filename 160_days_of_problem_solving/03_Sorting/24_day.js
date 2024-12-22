
// Name: Overlapping Intervals
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/sorting-gfg-160/problem/overlapping-intervals--170633

class Solution {
    // Function to Merge overlapping arr.
    mergeOverlap(arr) {
        // your code here
        arr.sort((a, b) => a[0] - b[0]);
        const res = [];
        res.push(arr[0]);
        for (let i = 1; i < arr.length; i++) {
            const last = res[res.length - 1];
            const curr = arr[i];
            if (curr[0] <= last[1]) 
                last[1] = Math.max(last[1], curr[1]);
            else 
                res.push(curr);
        }
        return res;
    }
}

let obj = new Solution();
const arr = [[1,3],[2,4],[6,8],[9,10]];
let ans = obj.mergeOverlap(arr)
console.log(ans);