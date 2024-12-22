
// Name: Strings Rotations of Each Other
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/string-gfg-160/problem/check-if-strings-are-rotations-of-each-other-or-not-1587115620

class Solution {
    // Function to check if two strings are rotations of each other or not.
    areRotations(s1, s2) {
        let txt = s1 + s1;
        let pat = s2;
        let n = txt.length;
        let m = pat.length;
        let lps = computeLPSArray(pat);
        
        let i = 0; 
        let j = 0;
        while (i < n) {
            if (pat[j] === txt[i]) {
                j++;
                i++;
            }
    
            if (j === m) {
                return true;
            }
            else if (i < n && pat[j] !== txt[i]) {
                if (j !== 0)
                    j = lps[j - 1];
                else
                    i++;
            }
        }

        function computeLPSArray(pat) {
            let n = pat.length;
            let lps = new Array(n).fill(0);
            let len = 0;
            lps[0] = 0;
            let i = 1;
            while (i < n) {
                if (pat[i] === pat[len]) {
                    len++;
                    lps[i] = len;
                    i++;
                }else {
                    if (len !== 0) {
                        len = lps[len - 1];
                    }
                    else {
                        lps[i] = 0;
                        i++;
                    }
                }
            }
            return lps;
        }
        return false;
    }
}





let obj = new Solution();
let s1 = "abcd", s2 = "acbd"
let ans = obj.areRotations(s1, s2);
console.log(ans);