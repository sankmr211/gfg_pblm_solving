
// Name: Set Matrix Zeroes
// Link: 

class Solution {
    /**
     * @param {number[][]} mat
     */
    setMatrixZeroes(mat) {
        // your code here
            const n = mat.length, m = mat[0].length;
            let c0 = 1;
        
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (mat[i][j] === 0) {
        
                        // mark i-th row
                        mat[i][0] = 0;
        
                        // mark j-th column
                        if (j === 0)
                            c0 = 0;
                        else
                            mat[0][j] = 0;
                    }
                }
            }
        
            for (let i = 1; i < n; i++) {
                for (let j = 1; j < m; j++) {
        
                    // Check for col & row
                    if (mat[i][0] === 0 || mat[0][j] === 0) {
                        mat[i][j] = 0;
                    }
                }
            }
        
            if (mat[0][0] === 0) {
                for (let j = 0; j < m; j++)
                    mat[0][j] = 0;
            }
        
            if (c0 === 0) {
                for (let i = 0; i < n; i++)
                    mat[i][0] = 0;
            }
    }
}

let obj = new Solution();
const arr = [[1, -1, 1],[-1, 0, 1],[1, -1, 1]];
obj.setMatrixZeroes(arr)
console.log(arr);