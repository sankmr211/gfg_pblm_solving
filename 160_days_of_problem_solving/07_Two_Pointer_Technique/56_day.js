
// Name: Indexes of Subarray Sum
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/two-pointer-technique-gfg-160/problem/subarray-with-given-sum-1587115621

class Solution {
    subarraySum(arr, target) {
        // code here
        let res = []
        let n = arr.length
        
        for(let i = 0;i< n;i++){
            let curr = 0
            for(let j = i; j < n; j++){
                 curr += arr[j]
                
                if(curr === target){
                    res.push(i + 1)
                    res.push(j + 1)
                    return res
                }
                
            }
            
        }
        return [-1]
    }
}

let obj = new Solution();
const arr = [1, 2, 3, 7, 5], target = 12;
let ans = obj.subarraySum(arr, target)
console.log(ans);