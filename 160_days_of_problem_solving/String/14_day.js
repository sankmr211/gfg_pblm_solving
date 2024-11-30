
// Name: Implement Atoi
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/string-gfg-160/problem/implement-atoi

class Solution {
    myAtoi(str) {
        let largest_val = Math.pow(2, 31) - 1       
        let smallest_val = Math.pow(-2, 31)
        let number_pat = /\d/
        let result = number_pat.test(str);
        if(result){
            str = str.trim();
            if(isNaN(str)){
                for (let i = 0; i < str.length; i++) {
                    const element = str[i];
                    if(isNaN(element) && (element != '-' || ( element == '-' && i > 0) )){
                        str = str.substr(0, i);
                        if(!isNaN(str)){
                            return numberlimitcheck(str)
                        }
                    }
                }
                if(!number_pat.test(str)){
                    return 0
                }
                
            }else{
                return numberlimitcheck(str)
            }
        }else{
            return 0
        }

        function numberlimitcheck(val) {
            if(Number(val) < smallest_val){
                return smallest_val
            }else if(Number(val) > largest_val){
                return largest_val
            }else{
                if(Number(val) == 0){
                    return 0
                }
                return Number(val)
            }
        }
    }
}

let obj = new Solution();
let ans = obj.myAtoi("-0Y");
console.log(ans);
