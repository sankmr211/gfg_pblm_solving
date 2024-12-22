
// Name: K-th element of two Arrays
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/searching-gfg-160/problem/k-th-element-of-two-sorted-array1317

class Solution {
    kthElement(a, b, k) {
        // code here
            let n = a.length, m = b.length;

    if (n > m) {
        return this.kthElement(b, a, k);
    }

    let lo = Math.max(0, k - m), hi = Math.min(k, n);

    while (lo <= hi) {
        let mid1 = Math.floor((lo + hi) / 2);
        let mid2 = k - mid1;
        let l1 = (mid1 === 0 ? -Infinity : a[mid1 - 1]);
        let r1 = (mid1 === n ? Infinity : a[mid1]);

        let l2 = (mid2 === 0 ? -Infinity : b[mid2 - 1]);
        let r2 = (mid2 === m ? Infinity : b[mid2]);

        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2);
        }

        if (l1 > r2) {
            hi = mid1 - 1;
        }
        else {
            lo = mid1 + 1;
        }
    }

    return 0;
    }
}

let obj = new Solution();
const a = [2, 3, 6, 7, 9], b = [1, 4, 8, 10], k = 5;
let ans = obj.kthElement(a, b, k)
console.log(ans);