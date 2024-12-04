
// Name: Min Chars to Add for Palindrome
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/string-gfg-160/problem/minimum-characters-to-be-added-at-front-to-make-string-palindrome

class Solution {
    // Function to find minimum number of characters needed to make the string
    // palindrome.
    minChar(s) {
        // your code here
        function computeLPSArray(pat) {
            let n = pat.length;
            let lps = new Array(n).fill(0);
            let len = 0;
            let i = 1;
            while (i < n) {
                if (pat[i] === pat[len]) {
                    len++;
                    lps[i] = len;
                    i++;
                }
                else {
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

        let n = s.length;
        let rev = s.split("").reverse().join("");
        s = s + "$" + rev;
        let lps = computeLPSArray(s);
        return n - lps[lps.length - 1];
        
    }
}

let obj = new Solution();
let txt = "abc"
let ans = obj.minChar(txt);
console.log(ans);