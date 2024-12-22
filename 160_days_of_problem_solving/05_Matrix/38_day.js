
// Name: Search in a Row-Column sorted matrix
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/matrix-gfg-160/problem/search-in-a-matrix17201720

class Solution {
    matSearch(mat, x) {
        // code here
        let res = false
        for (let i = 0; i < mat.length; i++) {
            const element = mat[i];
            for (let j = 0; j < element.length; j++) {
                const ele = element[j];
                if(ele == x){
                    res = true
                    break;
                }
            }
        }
        return res
    }
}

let obj = new Solution();
const arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], x = 3;
let ans = obj.matSearch(arr, x)
console.log(ans);