
// Name: Insert Interval
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/sorting-gfg-160/problem/insert-interval-1666733333

class Solution {
    insertInterval(intervals, newInterval) {
        let res = [];
        let i = 0;
        const n = intervals.length;
    
        while (i < n && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i]);
            i++;
        }
    
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        res.push(newInterval);
    
        while (i < n) {
            res.push(intervals[i]);
            i++;
        }
    
        return res;
    }
}

let obj = new Solution();
const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,9];
let ans = obj.insertInterval(intervals,newInterval)
console.log(ans);