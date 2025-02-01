
// Name: N-Queen Problem
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/recursion-and-backtracking-gfg-160/problem/n-queen-problem0315

class Solution {
    nQueenUtil(j, n, board, rows, diag1, diag2, res) {
        if (j > n) {
            res.push([...board]);
            return;
        }
        for (let i = 1; i <= n; ++i) {
            if (!rows[i] && !diag1[i + j] && !diag2[i - j + n]) {

                rows[i] = diag1[i + j] = diag2[i - j + n] = true;
                board.push(i);

                this.nQueenUtil(j + 1, n, board, rows, diag1, diag2, res);

                board.pop();
                rows[i] = diag1[i + j] = diag2[i - j + n] = false;
            }
        }
    }


    nQueen(n) {
        const res = [];
        const board = [];

        const rows = Array(n + 1).fill(false);

        const diag1 = Array(2 * n + 1).fill(false);
        const diag2 = Array(2 * n + 1).fill(false);

        this.nQueenUtil(1, n, board, rows, diag1, diag2, res);
        return res;
    }
}

let obj = new Solution();
const n = 2
let ans = obj.nQueen(n)
console.log(ans);