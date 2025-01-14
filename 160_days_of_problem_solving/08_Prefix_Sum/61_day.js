
// Name: Equilibrium Point
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/prefix-sum-gfg-160/problem/equilibrium-point-1587115620

class Solution {
    // Function to find equilibrium point in the array.
    findEquilibrium(arr) {
        // code here
        let prefSum = 0;
        let total = arr.reduce((sum, ele) => sum + ele, 0);
    
        for (let pivot = 0; pivot < arr.length; pivot++) {
            let suffSum = total - prefSum - arr[pivot];
            if (prefSum === suffSum) {
                return pivot;
            }
            prefSum += arr[pivot];
        }
    
        return -1;
    }
}

let obj = new Solution();
const arr = [1, 1, 1, 1];
let ans = obj.findEquilibrium(arr)
console.log(ans);