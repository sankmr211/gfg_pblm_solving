
// Name: Print Anagrams Together
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/hashing-gfg-160/problem/print-anagrams-together

class Solution {
    anagrams(arr) {
        // code here
        let res = [];
        let mp = new Map();
    
        for (let i = 0; i < arr.length; i++) {
            let s = arr[i];

            s = s.split('').sort().join('');
            if (!mp.has(s)) {
                mp.set(s, res.length);
                res.push([]);
            }

            res[mp.get(s)].push(arr[i]);
        }
    
        return res;
    }
}

let obj = new Solution();
const arr =  ["act", "god", "cat", "dog", "tac"];
let ans = obj.anagrams(arr)
console.log(ans);