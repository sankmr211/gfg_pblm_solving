
// Name: Nearest multiple of 10
// link: https://www.geeksforgeeks.org/problems/nearest-multiple-of-102437/1

function checkmulit(str) {
    var match = str.match(/^0+/)
    var level = match ? match[0].length : 0
    str = BigInt(str) 
    let divided = str % 10n
    let value
    if(divided > 5){
       value = ((10n - divided) + (str + 0n)).toString()
    }else if(divided == 5 || divided < 5){
       value = (str - divided).toString()
    }else{
       value = str.toString()
    }
 
    if(level > 0){
       value = match[0] + value
    }
 
    return value 
 }
 
 console.log(checkmulit("039918170518645084488358420102776920"))