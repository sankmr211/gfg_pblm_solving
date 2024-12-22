
// Name: Peak element
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/searching-gfg-160/problem/peak-element

class Solution {
    peakElement(arr) {
        // Code here
        let n = arr.length;

        for (let i = 0; i < n; i++) {
            let left = true;
            let right = true;
    
            if (i > 0 && arr[i] <= arr[i - 1]){
                left = false;
            }
    
            if (i < n - 1 && arr[i] <= arr[i + 1]){
                right = false;
            }
    
            if (left && right) {
                return i;
            }
        }
    }
}

let obj = new Solution();
const arr = [1, 2, 4, 5, 7, 8, 3];
let ans = obj.peakElement(arr)
console.log(ans);