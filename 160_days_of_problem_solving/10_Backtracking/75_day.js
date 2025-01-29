
// Name: Implement Pow
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/recursion-and-backtracking-gfg-160/problem/powx-n

class Solution {
    power(b, e) {
        // Code here
        if (e == 0){
            return 1;
        }

        if (e < 0){
            return 1 / this.power(b, -e);
        }

        let temp = this.power(b, Math.floor(e / 2));

        if (e % 2 == 0){
            return temp * temp;
        }
        else{
            return b * temp * temp;
        }
        
    }
}

let obj = new Solution();
const b = 0.55000, e = 3;
let ans = obj.power(b,e)
console.log(ans);