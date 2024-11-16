
// Name: Second Largest
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/second-largest3735

class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        // Code Here
        let largest = -1,second_largest = -1
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if(element > largest){
                second_largest = largest
                largest = element
            }else if(element > second_largest && largest != element){
                second_largest = element
            }
            
        }
        return second_largest
    }
}

let obj = new Solution();
let ans = obj.getSecondLargest([12, 12]);
console.log(ans);