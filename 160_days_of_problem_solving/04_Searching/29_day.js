
// Name: Sorted and Rotated Minimum
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/searching-gfg-160/problem/minimum-element-in-a-sorted-and-rotated-array3611

class Solution {
    // Function to find the minimum element in a sorted and rotated array.
    findMin(arr) {
        // your code here
        let smallest = arr[0]
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if(element < smallest){
                smallest = element
            }
            
        }
        return smallest
    }
}

let obj = new Solution();
const arr = [5, 6, 7, 8, 9, 10];
let ans = obj.findMin(arr)
console.log(ans);