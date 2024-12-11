
// Name: Merge Without Extra Space
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/sorting-gfg-160/problem/merge-two-sorted-arrays-1587115620

class Solution {
    mergeArrays(a, b) {
        // code here
        let n = a.length;
        let m = b.length;
        let gap = Math.floor((n + m + 1) / 2);
    
        while (gap > 0) {
            let i = 0;
            let j = gap;
    
            while (j < n + m) {
            
                if (j < n && a[i] > a[j]) {
                    [a[i], a[j]] = [a[j], a[i]];
                } 
                
                else if (i < n && j >= n && a[i] > b[j - n]) {
                    [a[i], b[j - n]] = [b[j - n], a[i]];
                } 
                
                else if (i >= n && b[i - n] > b[j - n]) {
                    [b[i - n], b[j - n]] = [b[j - n], b[i - n]];
                }
                i++;
                j++;
            }
    
            if (gap === 1) break;
    
            gap = Math.floor((gap + 1) / 2);
        }
        return {a, b}
    }
}

let obj = new Solution();
const a = [1, 5, 9, 10, 15, 20];
const b = [2, 3, 8, 13];
let ans = obj.mergeArrays(a, b)
console.log(ans.a ,ans.b);