
// Name: Spirally traversing a matrix
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/matrix-gfg-160/problem/spirally-traversing-a-matrix-1587115621

class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(mat) {
        // code here
        const m = mat.length;
        const n = mat[0].length;

        const res = [];

        let top = 0, bottom = m - 1, left = 0, right = n - 1;

        while (top <= bottom && left <= right) {

            for (let i = left; i <= right; ++i) {
                res.push(mat[top][i]);
            }
            top++;

            for (let i = top; i <= bottom; ++i) {
                res.push(mat[i][right]);
            }
            right--;

            if (top <= bottom) {
                for (let i = right; i >= left; --i) {
                    res.push(mat[bottom][i]);
                }
                bottom--;
            }

            if (left <= right) {
                for (let i = bottom; i >= top; --i) {
                    res.push(mat[i][left]);
                }
                left++;
            }
        }

        return res;


    }
}

let obj = new Solution();
const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
let ans = obj.spirallyTraverse(arr)
console.log(ans);