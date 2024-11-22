
// Name: Majority Element II
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/majority-vote

class Solution {
    findMajority(arr) {
        // Your code goes here
        let n = arr.length
        let count_data = {}
        let res = []

        for (let i = 0; i < arr.length; i++) {
            count_data[arr[i]] = (count_data[arr[i]] || 0) + 1
        }

        for (const key in count_data) {
            let obj_key = Number(key)
            let obj_value = count_data[key]
            
            if(obj_value > Math.floor(n / 3)){
                res.push(obj_key)
            }            
        }

        return res;
    }
}

let obj = new Solution();
let ans = obj.findMajority([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]);
console.log(ans);