
// Name: Smallest Positive Missing Number
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/smallest-positive-missing-number-1587115621

class Solution {
    missingNumber(arr) {
        // your code here
        arr.sort((a ,b)=> a - b)
        for (let i = 0; i < arr.length; i++) { 
            
            if(arr[i] > 0){           
                if(arr[i] > 1){
                    if(i == 0){
                        return 1
                    }else{
                        // console.log(arr[i],arr);
                        if(arr[i - 1] < 0){
                            return arr[i] - (arr[i] - 1)
                        }
                        if(arr[i - 1] + 1 !==  arr[i]){
                           let value = arr[i - 1] + 1                           
                           if(value == arr[i] - value || value < arr[i] - value || arr[i] - value > 0){
                             return value
                           }
                        } 
                    }
                }
            }
            
        }  

        
        if(arr[arr.length - 1] < 0){
            return 1
        }else{
            return arr[arr.length - 1] + 1
        }
    }
}

let obj = new Solution();
let ans = obj.missingNumber( [-8, 0, -1, -4, -3]);
console.log(ans);