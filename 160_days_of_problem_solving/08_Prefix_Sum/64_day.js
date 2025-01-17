
// Name: Product array puzzle
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/prefix-sum-gfg-160/problem/product-array-puzzle4525

class Solution {
    productExceptSelf(arr) {
        // code here
        let zeros = 0, idx = -1, prod = 1;
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                zeros++;
                idx = i;
            } else {
                prod *= arr[i];
            }
        }
    
        let res = new Array(arr.length).fill(0);
    
        if (zeros === 0) {
            for (let i = 0; i < arr.length; i++) {
                res[i] = Math.floor(prod / arr[i]);
            }
        }
        else if (zeros === 1){
            res[idx] = prod;
        }
    
        return res;
    }
}

let obj = new Solution();
const arr = [12, 0];
let ans = obj.productExceptSelf(arr)
console.log(ans);