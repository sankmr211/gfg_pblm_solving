
// Name: Reverse an Array
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/reverse-an-array

class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        // your code here
        for (let i = 0; i < arr.length/2; i++) {
            let temp = arr[i]
            arr[i] = arr[arr.length - (i + 1)]
            arr[arr.length - (i + 1)] = temp
        }
        return arr
    }
}

let obj = new Solution();
let ans = obj.reverseArray([1,2,3,4]);
console.log(ans);