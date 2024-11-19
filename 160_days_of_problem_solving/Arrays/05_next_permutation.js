
// Name: Next Permutation
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/next-permutation5226

class Solution {
    nextPermutation(arr) {
        // code here
        let n = arr.length
        let pvoit = -1
        for (let i = n - 2; i >= 0; i--) {
            if (arr[i] < arr[i + 1]) {
                pvoit = i
                break
            }

        }
        
        if (pvoit == -1) {
            arr_reverse(arr, 0, n - 1)
            return arr;
        }


        for (let i = n - 1; i > pvoit; i--) {
            if (arr[i] > arr[pvoit]) {
                let temp = arr[i]
                arr[i] = arr[pvoit]
                arr[pvoit] = temp
                break;
            }
        }
        
        arr_reverse(arr, pvoit + 1, n - 1)

        function arr_reverse(arr, start, end) {
            while (start < end) {
                let temp = arr[end]
                arr[end] = arr[start]
                arr[start] = temp
                start++
                end--
            }
        }

        return arr
    }
}

let obj = new Solution();
let ans = obj.nextPermutation([2, 4, 1, 7, 5, 0]);
console.log(ans);