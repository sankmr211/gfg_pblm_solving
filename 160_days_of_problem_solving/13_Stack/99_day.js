// Name: Parenthesis Checker
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/stack-gfg-160/problem/parenthesis-checker2744

class Solution {
    isBalanced(s) {
        // code here
        let splited_str = s.split("")
        if(splited_str.length === 0) return false

        let balance_data = []
        let result = false

        for (let i = 0; i < splited_str.length; i++) {
            const element = splited_str[i];
            
            if(element == "(" || element == "{" || element == "[" ){
                balance_data.push(element)
            }else if((element == ")" || element == "}" || element == "]") && balance_data.length > 0){                
                if(this.checkparatheses(balance_data[balance_data.length - 1], element)){
                    balance_data.pop()
                }else{
                    return false
                }
            }else{                
                balance_data.push(element)
            }
        }
       
        if(balance_data.length == 0){
            result = true
        }
        return result
        
    }

    checkparatheses(start, end){
        let checked = false
        if((start === "(" && end === ")") || (start === "{" && end === "}") || (start === "[" && end === "]")){
            checked = true
        }

        return checked
    }
}

let obj = new Solution();
//true
const s = "[{()}]"
// const s = "[()()]{}"

//false
// const s = "([]"
// const s = "([{]})"
// const s = "}";
// const s = "{)]}";

let ans = obj.isBalanced(s);
console.log(ans);