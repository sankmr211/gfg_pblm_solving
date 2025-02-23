// Name: Next Greater Element
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/stack-gfg-160/problem/next-larger-element-1587115620


class Solution {
    // Function to find the next greater element for each element of the array.
    nextLargerElement(arr) {
        // code here
        let n = arr.length;
        let res = new Array(n).fill(-1);
        let stk = [];
    
        for (let i = n - 1; i >= 0; i--) {
    
            while (stk.length > 0
                   && stk[stk.length - 1] <= arr[i]) {
    
                stk.pop();
            }
    
            if (stk.length > 0) {
                res[i] = stk[stk.length - 1];
            }
    
            stk.push(arr[i]);
        }
    
        return res;
    }
}

let obj = new Solution();
let arr = [ 6, 8, 0, 1, 3 ];
let ans = obj.nextLargerElement(arr);
console.log(ans);