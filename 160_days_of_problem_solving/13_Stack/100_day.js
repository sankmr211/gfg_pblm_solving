// Name: Longest valid Parentheses
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/stack-gfg-160/problem/longest-valid-parentheses5657

class Solution {
    maxLength(s) {
        // code here
        let stack = [];
        stack.push(-1);
        let maxLen = 0;
    
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push(i);
            } else {
                stack.pop();
                if (stack.length === 0) {
                    stack.push(i);
                } else {
                    maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
                }
            }
        }
        return maxLen;

    }
}


let obj = new Solution();
const s = "((()";
let ans = obj.maxLength(s);
console.log(ans);