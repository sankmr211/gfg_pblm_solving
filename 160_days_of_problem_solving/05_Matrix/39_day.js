
// Name: Search in a row-wise sorted matrix
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/matrix-gfg-160/problem/search-in-a-row-wise-sorted-matrix

class Solution {
    // Function to search a given number in row-column sorted matrix.
    searchRowMatrix(mat, x) {
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
const arr = [[3, 4, 9],[2, 5, 6],[9, 25, 27]], x = 9;
let ans = obj.searchRowMatrix(arr,x)
console.log(ans);