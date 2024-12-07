
// Name: Find H-Index
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/sorting-gfg-160/problem/find-h-index--165609

class Solution {
    // Function to find hIndex
    hIndex(citations) {
        // code here
        const n = citations.length;
        const freq = new Array(n + 1).fill(0);
        for (let citation of citations) {
            if (citation >= n)
                freq[n] += 1;
            else
                freq[citation] += 1;
        }
    
        let idx = n;
        
        let s = freq[n]; 
        while (s < idx) {
            idx--;
            s += freq[idx];
        }
        return idx;
    }
}

let obj = new Solution();
const citations = [3, 0, 5, 3, 0];
let ans = obj.hIndex(citations);
console.log(ans);