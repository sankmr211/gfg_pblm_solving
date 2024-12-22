
// Name: Search Pattern (KMP-Algorithm)
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/string-gfg-160/problem/search-pattern0205

class Solution {

    search(pat, txt) {
        // your code here
        function constructLps(pat, lps) {
            let len = 0;
            lps[0] = 0;
        
            let i = 1;
            while (i < pat.length) {
                if (pat[i] === pat[len]) {
                    len++;
                    lps[i] = len;
                    i++;
                }
                else {
                    if (len !== 0) {
                        len = lps[len - 1];
                    } else {
                        lps[i] = 0;
                        i++;
                    }
                }
            }
        }

        const n = txt.length;
        const m = pat.length;
    
        const lps = [];
        const result = [];
    
        constructLps(pat, lps);

        let i = 0;
        let j = 0;
    
        while (i < n) {

            if (txt[i] === pat[j]) {
                i++;
                j++;
    
                if (j === m) {
                    result.push(i - j);
                    j = lps[j - 1];
                }
            }
            else {
                if (j !== 0)
                    j = lps[j - 1];
                else
                    i++;
            }
        }
        return result

    }

}

let obj = new Solution();
let pat = "aaba"
let txt = "aabaacaadaabaaba"
let ans = obj.search(pat,txt);
console.log(ans);