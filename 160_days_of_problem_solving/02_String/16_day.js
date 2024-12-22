
// Name: Anagram
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/string-gfg-160/problem/anagram-1587115620

class Solution {
    // Function is to check whether two strings are anagram of each other or not.
    areAnagrams(s1, s2) {
        // code here
        if(s1.length > s2.length || s2.length > s1.length) return false

        const map = new Map();

        for (let i = 0; i < s1.length; i++) {
            const element = s1[i];
            
            if(map.has(element)){
                map.set(element,map.get(element) + 1)
            }else{
                map.set(element,1)
            }
        }

        for (let i = 0; i < s2.length; i++) {
            const element = s2[i];
            
            if(map.has(element)){
                map.set(element,map.get(element) - 1)
            }
        }
        
        for (const x of map.values()) {
            if(x!= 0){
                return false
            }
        }
        return true

    }
}

let obj = new Solution();
let str = 
`a
b`
let [val1,val2] = str.split('\n')
let ans = obj.areAnagrams(val1, val2);
console.log(ans);

