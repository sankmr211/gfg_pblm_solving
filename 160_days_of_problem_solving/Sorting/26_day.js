
// Name: Non-overlapping Intervals
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/sorting-gfg-160/problem/non-overlapping-intervals

class Solution {
    // Function to find the minimum number of removals required.
    minRemoval(intervals) {
        // your code here
        let crnt = 0;
        intervals.sort((a, b) => a[1] - b[1]);    
        let last = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {

            if (intervals[i][0] < last){
                crnt++;
            }else{
                last = intervals[i][1];
            }

        }
    
        return crnt;
    }
}

let obj = new Solution();
const arr = [[1, 2], [2, 3], [3, 4], [1, 3]];
let ans = obj.minRemoval(arr)
console.log(ans);