
// Name: Count the number of possible triangles
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/two-pointer-technique-gfg-160/problem/count-possible-triangles-1587115620

class Solution {
    // Function to count the number of possible triangles.
    countTriangles(arr) {
        // code here
        let res = 0;
        arr.sort((a, b) => a - b);
    
        for (let i = 2; i < arr.length; ++i) {
        
            let left = 0, right = i - 1;
        
            while (left < right) {
                if (arr[left] + arr[right] > arr[i]) {
                    res += right - left;
    
                    right--;
                } else {
                    left++;
                }
            }
        }
    
        return res;
    }
}

let obj = new Solution();
const arr = [4, 6, 3, 7];
let ans = obj.countTriangles(arr)
console.log(ans);