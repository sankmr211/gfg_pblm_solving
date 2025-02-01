
// Name: Word Search
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/recursion-and-backtracking-gfg-160/problem/word-search

class Solution {
    isWordExist(mat, word) {
        const wLen = word.length;
        const n = mat.length;
        const m = mat[0].length;
    
        if (wLen > n * m){
            return false;
        }
    
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                
                if (mat[i][j] === word[0]) {
                    if (this.findMatch(mat, word, i, j, 0))
                        return true;
                }
            }
        }
        return false;
    }

    findMatch(mat, word, x, y, wIdx) {
        const wLen = word.length;
        const n = mat.length;
        const m = mat[0].length;
    
        if (wIdx === wLen)
            return true;
    
        if (x < 0 || y < 0 || x >= n || y >= m){
            return false;
        }
    
        if (mat[x][y] === word[wIdx]) {
            const temp = mat[x][y];
            mat[x][y] = '#';
    
            const res = this.findMatch(mat, word, x - 1, y, wIdx + 1) ||
                        this.findMatch(mat, word, x + 1, y, wIdx + 1) ||
                        this.findMatch(mat, word, x, y - 1, wIdx + 1) ||
                        this.findMatch(mat, word, x, y + 1, wIdx + 1);
    
            mat[x][y] = temp;
            return res;
        }
    
        return false;
    }
}

let obj = new Solution();
// Example 1
let mat1 = [
    ["T", "E", "U"],
    ["S", "G", "K"],
    ["T", "E", "L"]
];
let word1 = "GEEK";
console.log(obj.isWordExist(mat1, word1)); // false

// Example 2
let mat2 = [
    ["A", "B", "C", "D"],
    ["P", "Q", "R", "S"],
    ["U", "V", "W", "X"]
];
let word2 = "QRWX";
console.log(obj.isWordExist(mat2, word2)); // true

// Example 3
let mat3 = [
    ["A", "B", "A"],
    ["B", "A", "B"]
];
let word3 = "AB";
console.log(obj.isWordExist(mat3, word3)); // true

