
// Name: Sort 0s, 1s and 2s
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/sorting-gfg-160/problem/sort-an-array-of-0s-1s-and-2s4231

class Solution {
    // Function to sort an array of 0s, 1s, and 2s
    sort012(arr) {
        // your code here
    let lo = 0;
    let hi = arr.length - 1;
    let mid = 0;
    while (mid <= hi) {
            if(arr[mid] === 0) {
            [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
            lo++;
            mid++;
         }
         else if(arr[mid] === 1) {
             mid++;
         }
         else {
            [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
            hi--;
         }
    }
    return arr  
    }
}

let obj = new Solution();
const arr = [0, 1, 2, 0, 1, 2];
let ans = obj.sort012(arr);
console.log(ans);