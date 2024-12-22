
// Name: Search in Rotated Sorted Array
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/searching-gfg-160/problem/search-in-a-rotated-array4618

class Solution {
    search(arr, key) {
        // code here
        let res = -1
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if(element == key){
                res = i
            }
        }
        return res
    }
}


let obj = new Solution();
const arr = [33, 42, 72, 99], key = 42;
let ans = obj.search(arr, key)
console.log(ans);