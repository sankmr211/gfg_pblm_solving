
// Name: Search in a sorted Matrix
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/matrix-gfg-160/problem/search-in-a-matrix-1587115621

class Solution {
    // Function to search a given number in row-column sorted matrix.
    searchMatrix(mat, x) {
      // code here
      let res = false;
      for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
          const element = mat[i][j];
          if (element == x) {
            res = true;
            break;
          }
        }
      }
      return res;
    }
}

let obj = new Solution();
const arr = [[87, 96, 99], [101, 103, 111]], x = 101;
let ans = obj.searchMatrix(arr, x)
console.log(ans);