
// Name: Solve the Sudoku
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/recursion-and-backtracking-gfg-160/problem/solve-the-sudoku-1587115621

class Solution {

    isSafe(mat, i, j, num, row, col, box) {
        if ((row[i] & (1 << num)) !== 0 || (col[j] & (1 << num)) !== 0 ||
            (box[Math.floor(i / 3) * 3 + Math.floor(j / 3)] & (1 << num)) !== 0){
                return false;
            }
    
        return true;
    }

    sudokuSolverRec(mat, i, j, row, col, box) {
        const n = mat.length;
    
        if (i === n - 1 && j === n){
            return true;
        }
    
        if (j === n) {
            i++;
            j = 0;
        }
    
        if (mat[i][j] !== 0){
            return this.sudokuSolverRec(mat, i, j + 1, row, col, box);
        }
    
        for (let num = 1; num <= n; num++) {
    
            if (this.isSafe(mat, i, j, num, row, col, box)) {
                mat[i][j] = num;
    
                row[i] |= (1 << num);
                col[j] |= (1 << num);
                box[Math.floor(i / 3) * 3 + Math.floor(j / 3)] |= (1 << num);
    
                if (this.sudokuSolverRec(mat, i, j + 1, row, col, box))
                    return true;
    
                mat[i][j] = 0;
                row[i] &= ~(1 << num);
                col[j] &= ~(1 << num);
                box[Math.floor(i / 3) * 3 + Math.floor(j / 3)] &= ~(1 << num);
            }
        }
    
        return false;
    }

    solveSudoku(mat) {
        // your code here
        const n = mat.length;
        const row = new Array(n).fill(0);
        const col = new Array(n).fill(0);
        const box = new Array(n).fill(0);
    
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] !== 0) {
                    row[i] |= (1 << mat[i][j]);
                    col[j] |= (1 << mat[i][j]);
                    box[Math.floor(i / 3) * 3 + Math.floor(j / 3)] |= (1 << mat[i][j]);
                }
            }
        }
    
        this.sudokuSolverRec(mat, 0, 0, row, col, box);
    }
}

let obj = new Solution();
const mat = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
];
let ans = obj.solveSudoku(mat)
console.log(mat);