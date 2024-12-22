
// Name: Rotate by 90 degree
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/matrix-gfg-160/problem/rotate-by-90-degree-1587115621

class Solution {
    // Function to rotate matrix anticlockwise by 90 degrees.
    rotateby90(mat) {
        // code here
        const n = mat.length;
        
        for (let i = 0; i < n; i++) {
            
            mat[i].reverse();
        }

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
            }
        }

    }
}

let obj = new Solution();
const arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
obj.rotateby90(arr)
console.log(arr);