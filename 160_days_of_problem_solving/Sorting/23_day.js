
// Name: Count Inversions
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/sorting-gfg-160/problem/inversion-of-array-1587115620

class Solution {
    // Function to count inversions in the array.
    inversionCount(arr) {
        // your code here
        function countAndMerge(arr, l, m, r) {
            let n1 = m - l + 1, n2 = r - m;
            let left = arr.slice(l, m + 1);
            let right = arr.slice(m + 1, r + 1);
            let res = 0;
            let i = 0, j = 0, k = l;
            while (i < n1 && j < n2) {
                if (left[i] <= right[j])
                    arr[k++] = left[i++];
                else {
                    arr[k++] = right[j++];
                    res += (n1 - i);
                }
            }

            while (i < n1)
                arr[k++] = left[i++];
            while (j < n2)
                arr[k++] = right[j++];
        
            return res;
        }
        
        function countInv(arr, l, r) {
            let res = 0;
            if (l < r) {
                let m = Math.floor((r + l) / 2);
                res += countInv(arr, l, m);
                res += countInv(arr, m + 1, r);
                res += countAndMerge(arr, l, m, r);
            }
            return res;
        }
        return countInv(arr, 0, arr.length - 1);
    }
}

let obj = new Solution();
const arr = [2, 4, 1, 3, 5];
// const arr = "7 72 90 21 60".split(" ").map(elm => Number(elm))
let ans = obj.inversionCount(arr)
console.log(ans);