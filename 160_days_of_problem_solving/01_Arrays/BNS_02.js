
// Name: Repetitive Addition Of Digits
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/array-bonus-problems/problem/repetitive-addition-of-digits2221

class Solution {
    singleDigit(n) {
        // code here
        if(n < 10){
            return n
        }
        return sum_num(n)
        
        
        function sum_num(params) {
            let number = params.toString()
            let splited = number.split("").map(elm=>Number(elm))
            let sum = 0
            for(let i = 0;i < splited.length;i++){        
                sum += splited[i]
            }    
            if(sum < 10){
                return sum
            }else{
                return sum_num(sum)
            }
        }
    }
}


let obj = new Solution();
let ans = obj.singleDigit(9);
console.log(ans);