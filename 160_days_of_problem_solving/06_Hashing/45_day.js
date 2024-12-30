
// Name: Intersection of Two arrays with Duplicate Elements
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/hashing-gfg-160/problem/intersection-of-two-arrays-with-duplicate-elements

class Solution {
    intersectionWithDuplicates(a, b) {
        // code here
        const sa = new Set(a);
        const res = [];

        for (let i = 0; i < b.length; i++) {
            if (sa.has(b[i])) {
                res.push(b[i]);
                sa.delete(b[i]);
            }
        }
        return res;
    }
}

let obj = new Solution();
const a = [1, 2, 3, 2, 1], b = [3, 2, 2, 3, 3, 2];
let ans = obj.intersectionWithDuplicates(a, b)
console.log(ans);