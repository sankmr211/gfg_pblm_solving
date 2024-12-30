
// Name: Union of Arrays with Duplicates
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/hashing-gfg-160/problem/union-of-two-arrays3538

class Solution {
    // Function to return the count of number of elements in the union of two arrays.
    findUnion(a, b) {
        // code here
       return [...new Set([...a,...b])].length
    }
}


let obj = new Solution();
const a = [1, 2, 1, 1, 2], b = [2, 2, 1, 2, 1];
let ans = obj.findUnion(a, b)
console.log(ans);