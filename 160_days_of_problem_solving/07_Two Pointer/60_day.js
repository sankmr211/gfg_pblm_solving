
// Name: Container With Most Water
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/two-pointer-technique-gfg-160/problem/container-with-most-water0535

class Solution {
    maxWater(arr) {
        // code here
        let left = 0
        let right = arr.length - 1
        let res = 0
        while(left < right) {
            let wat =  Math.min(arr[left],arr[right]) * (right - left)
            res = Math.max(res, wat)

            if(arr[left] < arr[right]) {
                left += 1
            }else {
                right -= 1
            }
        }
        return res
    }
}

let obj = new Solution();
const arr = [2, 1, 8, 6, 4, 6, 5, 5];
let ans = obj.maxWater(arr)
console.log(ans);