
// Name: Second Largest
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/second-largest3735

class Solution {
    maxProduct(arr) {
        // code here
    let n = arr.length;
    let maxval = Number.MIN_SAFE_INTEGER;

    let leftToRight = 1;

    let rightToLeft = 1;

    for (let i = 0; i < n; i++) {
        if (leftToRight === 0)
            leftToRight = 1;
        if (rightToLeft === 0)
            rightToLeft = 1;

        
        leftToRight *= arr[i];

        let j = n - i - 1;
        rightToLeft *= arr[j];
        maxval = Math.max(leftToRight, rightToLeft, maxval);
    }
    return maxval;
    }
}

let obj = new Solution();
let ans = obj.maxProduct([-2, 6, -3, -10, 0, 2]);
console.log(ans);