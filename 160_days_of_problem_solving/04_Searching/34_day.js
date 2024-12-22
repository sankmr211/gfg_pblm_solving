
// Name: Allocate Minimum Pages
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/searching-gfg-160/problem/allocate-minimum-number-of-pages0937

class Solution {
    // Function to find minimum number of pages.
    findPages(arr, k) {
        // your code here
        function check(arr, k, pageLimit) {

            let cnt = 1;
            let pageSum = 0;
            for(let i = 0; i < arr.length; i++) {
        
                if(pageSum + arr[i] > pageLimit) {
                    cnt++;
                    pageSum = arr[i];
                }
                else {
                    pageSum += arr[i];
                }
            }
            
            return (cnt <= k);
        }
        
        if(k > arr.length)
            return -1;
        
        let lo = Math.max(...arr);
        let hi = arr.reduce((a, b) => a + b, 0);
        let res = -1;
        
        while(lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            
            if(check(arr, k, mid)){
                res = mid;
                hi = mid - 1;
            }
            else {
                lo = mid + 1;
            }
        }
        
        return res;
    }
}

let obj = new Solution();
const arr = [12, 34, 67, 90], k = 2;
let ans = obj.findPages(arr, k)
console.log(ans);