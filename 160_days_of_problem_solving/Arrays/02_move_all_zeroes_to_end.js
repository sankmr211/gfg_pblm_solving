
// Name: Move All Zeroes to End
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/move-all-zeroes-to-end-of-array0751

class Solution {
    pushZerosToEnd(arr) {
        // code here
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] !== 0 && arr[count] == 0){
                arr[count] = arr[i]
                arr[i] = 0
                count++
            }else if(arr[count] !== 0){
                count++
            }
        }
        return arr
    }
}

let obj = new Solution();
let ans = obj.pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]);
console.log(ans);