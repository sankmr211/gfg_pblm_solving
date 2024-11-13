
// Name: Two Swaps
// link: https://www.geeksforgeeks.org/problems/two-swaps--155623/1

class Solution {
    checkSorted(arr) {
        // code here
        let checksort = false
        let sort_index = 0
        while(sort_index < arr.length - 1){
            if(arr[sort_index] > arr[sort_index + 1]){
                checksort = true
            }
            sort_index++
        }
        console.log(checksort);
    }
}



let obj = new Solution()
let arr = [1, 2, 3]
console.log(obj.checkSorted(arr));