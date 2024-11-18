
// Name: Rotate Array
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/rotate-array-by-n-elements-1587115621

class Solution {
    // Function to reverse the array.
    rotateArr(arr, d) {
        // code here

        d = d % arr.length
        reverse(arr,0,d - 1)

        reverse(arr,d,arr.length-1)

        reverse(arr,0,arr.length-1)

        function reverse(arr,start,end){
            while(start < end){
                let temp = arr[start]
                arr[start] = arr[end]
                arr[end] = temp
                start++
                end--
            }
        }
        return arr
    }
}

let obj = new Solution();
let ans = obj.rotateArr([1, 2, 3, 4, 5, 6], 2);
console.log(ans);