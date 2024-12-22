
// Name: Single Number
// link: https://www.geeksforgeeks.org/problems/single-number1014/1

class Solution {
    getSingle(arr) {
        // code here
        let i = 0
        let old_dupli = {count:0,value:0}
        for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
          let dupli_val = 0
          for (let j = 0; j < arr.length; j++) {
            if(element == arr[j]){
              dupli_val++
            }
          }
        }
        return odd_value;
    }
  }
  
  let obj = new Solution();
  console.log(obj.getSingle([12,12]));