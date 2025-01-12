
// Name: Longest substring with distinct characters
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/two-pointer-technique-gfg-160/problem/longest-distinct-characters-in-string5848

class Solution {
    longestUniqueSubstr(s) {
        // code here
        const MAX_CHAR = 26;
        const n = s.length;
        let res = 0;
        const lastIndex = new Array(MAX_CHAR).fill(-1);
        let start = 0;
    
        for (let end = 0; end < n; end++) {
    
            start = Math.max(start, lastIndex[s.charCodeAt(end) - 'a'.charCodeAt(0)] + 1);
    
            res = Math.max(res, end - start + 1);
    
            lastIndex[s.charCodeAt(end) - 'a'.charCodeAt(0)] = end;
        }
        return res;
    }
}

let obj = new Solution();
const s = "abcdefabcbb";
let ans = obj.longestUniqueSubstr(s)
console.log(ans);