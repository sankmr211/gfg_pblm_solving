// Name: Evaluation of Postfix Expression
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/stack-gfg-160/problem/evaluation-of-postfix-expression1735


class Solution {
    evaluate(arr){
        let stack = [];

        for (let token of arr) {
            
            if (!isNaN(token)) {
                stack.push(Number(token));
            } else {
                let val1 = stack.pop();
                let val2 = stack.pop();
    
                switch (token) {
                    case "+":
                        stack.push(val2 + val1);
                        break;
                    case "-":
                        stack.push(val2 - val1);
                        break;
                    case "*":
                        stack.push(val2 * val1);
                        break;
                    case "/":
                        stack.push(Math.trunc(val2 / val1)); 
                        break;
                }
            }
        }
        return stack.pop();
    }
}

let obj = new Solution();
const arr = ["2", "3", "1", "*", "+", "9", "-"];
let ans = obj.evaluate(arr);
console.log(ans);