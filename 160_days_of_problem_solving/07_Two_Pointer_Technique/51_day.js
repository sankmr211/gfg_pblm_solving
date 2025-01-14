
// Name: Count all triplets with given sum in sorted array
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/two-pointer-technique-gfg-160/problem/count-all-triplets-with-given-sum-in-sorted-array

class Solution {
    countTriplets(arr, target) {
        // code here
        let n = arr.length;
        let res = 0;

        for (let i = 0; i < n - 2; i++) {
            let left = i + 1, right = n - 1;

            while (left < right) {

                let sum = arr[i] + arr[left] + arr[right];
    
                if (sum < target) {
                    left += 1;
                }
                else if (sum > target) {
                    right -= 1;
                }
                else if (sum === target) {
                    let elm = arr[left], elm1 = arr[right];
                    let cnt = 0, cnt1 = 0;
    
                    while (left <= right && arr[left] === elm) {
                        left++;
                        cnt++;
                    }
    
                    while (left <= right && arr[right] === elm1) {
                        right--;
                        cnt1++;
                    }
    
                    if (elm === elm1){
                        res += (cnt * (cnt - 1)) / 2;
                    }
                    else{
                        res += (cnt * cnt1);
                    }
                }
            }
        }
        return res;
    }
}

let obj = new Solution();
const arr = [1, 1, 1, 1, 1, 1], target = 3;
let ans = obj.countTriplets(arr,target)
console.log(ans);