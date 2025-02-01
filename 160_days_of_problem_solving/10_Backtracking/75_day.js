
// Name: Permutations of a String
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/recursion-and-backtracking-gfg-160/problem/permutations-of-a-given-string2041

class Solution {
    findPermutation(s) {
        // code here
        s = s.split("").sort();
        let res = new Set();
        this.recurPermute(0, s, res);
        return Array.from(res).sort();
    }

    recurPermute(index, s, ans) {

        if (index === s.length) {
            ans.add(s.join(""));
            return;
        }

        for (let i = index; i < s.length; i++) {
            [s[index], s[i]] = [s[i], s[index]];
            this.recurPermute(index + 1, s, ans);
            [s[index], s[i]] = [s[i], s[index]];
        }
    }
}


let obj = new Solution();
const s = "ABC";
let ans = obj.findPermutation(s)
console.log(ans);