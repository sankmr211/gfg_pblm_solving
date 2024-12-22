
// Name: Add Binary Strings
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/string-gfg-160/problem/add-binary-strings3805

class Solution {
    addBinary(s1, s2) {
        // code here
        s1 = BigInt(s1).toString().split("")
        s2 = BigInt(s2).toString().split("")

        let remain = 0
        let res = ""
        let flag = true
        while (flag) {            
            let val1 = s1.pop();
            let val2 = s2.pop();
            
            if(val1 == undefined && val2 == undefined){        
                break
            }
            
            val1 = val1 == undefined ? 0 : val1 
            val2 = val2 == undefined ? 0 : val2 
            
            remain = binarysum(remain , val1)
            
            let val = binarysum(remain , val2)
            
            if(val > 9){

                if(s1.length == 0 && s2.length == 0){
                    res = val+res
                }else{
                    let splited_data = val.split("")                    
                    res = splited_data[1]+res
                    remain = splited_data[0]
                }
            }else{                
                res = val+res
                remain = 0
            }
        }

        function binarysum(val1,val2) {
    
            let res = ""
            if(val1 == val2 & val1 == "1"){
                res = "10"
            }else if(val1 > 9 && val2 == 1){
                res = "11"
            }else{                
                 res = `${BigInt(val1) + BigInt(val2)}`
            }
        
            return res
        }

        return res

    }
}

let obj = new Solution();
let str = 
`100100000111111101010010010011010101110110
1011101001111110010000000001010001101100000010010110001111100010101100011110001011101000100011111111111010000010010101010111001000010100101100001101011101101011011001000110111111010000000110110000010101100100010000111000100111100110001110111101010011001011010011011010011110111101111001001001010111110001101000100011101001011000110100`

let [val1,val2] = str.split('\n')
let ans = obj.addBinary(val1, val2);
console.log(ans);

