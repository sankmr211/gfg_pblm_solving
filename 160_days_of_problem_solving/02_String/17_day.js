
// Name: Non Repeating Character
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/string-gfg-160/problem/non-repeating-character-1587115620

class Solution {
    // Function to find the first non-repeating character in a string.
    nonRepeatingChar(s) {
        // code here
        const map = new Map();
        let res = -1
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            
            if(map.has(element)){
                map.set(element,map.get(element) + 1)
            }else{
                map.set(element,1)
            }
        }

        for (const x of map.keys()) {
            if(map.get(x) == 1){
                res = x
                break
            }
        }

        return res
    }
}

let obj = new Solution();
let str = `geeksforgeeks`
let ans = obj.nonRepeatingChar(str);
console.log(ans);

