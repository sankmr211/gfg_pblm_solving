
// Name: Number of occurrence
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/searching-gfg-160/problem/number-of-occurrence2259

class Solution {
    // Function to count the occurrences of x in the array.
    countFreq(arr, target) {
        // your code here
        let count = 0

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if(element == target) count++
        }

        return count
    }
}

let obj = new Solution();
const arr = [8, 9, 10, 12, 12, 12], target = 12;
let ans = obj.countFreq(arr,target)
console.log(ans);