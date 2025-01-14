
// Name: Sum Pair closest to target
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/two-pointer-technique-gfg-160/problem/pair-in-array-whose-sum-is-closest-to-x1124

class Solution {
    sumClosest(arr, target) {
        let n = arr.length;
        arr.sort((a, b) => a - b);
        let res = [];
        let minDiff = Number.MAX_SAFE_INTEGER;
    
        for (let i = 0; i < n - 1; i++) {
          
            let comp = target - arr[i];
            let closest = this.findclosest(arr, i + 1, n - 1, comp);
          
            let currDiff = Math.abs(target - arr[i] - closest);
            if (currDiff < minDiff) {
                minDiff = currDiff;
                res = [arr[i], closest];
            }
        }
    
        return res;
    }

    findclosest(arr, low, high, comp) {
        let res = arr[low];
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
    
            if (Math.abs(arr[mid] - comp) < Math.abs(res - comp)) {
                res = arr[mid];
            }
          
            else if (Math.abs(arr[mid] - comp) === Math.abs(res - comp)) {
                res = Math.max(res, arr[mid]);
            }
            
            if (arr[mid] === comp) {
                return arr[mid];
            } else if (arr[mid] < comp) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    
        return res;
    }
}

let obj = new Solution();
const arr = [5 ,2 ,7, 1, 4], target = 10;
let ans = obj.sumClosest(arr, target)
console.log(ans);