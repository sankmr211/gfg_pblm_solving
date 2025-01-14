
// Name: Count distinct elements in every window
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/two-pointer-technique-gfg-160/problem/count-distinct-elements-in-every-window

class Solution {
    countDistinct(arr, k) {
        // code here
        let n = arr.length;  
        let res = [];
        let freq = new Map();
      
        for (let i = 0; i < k; i++) {
            freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
        }
      
        res.push(freq.size);
      
        for (let i = k; i < n; i++) {
            freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
            
            freq.set(arr[i - k], freq.get(arr[i - k]) - 1);
          
            if (freq.get(arr[i - k]) === 0) {
                freq.delete(arr[i - k]);
            }
          
            res.push(freq.size);
        }
      
        return res;
    }
}

let obj = new Solution();
const arr = [1, 2, 1, 3, 4, 2, 3], k = 4;
let ans = obj.countDistinct(arr, k)
console.log(ans);