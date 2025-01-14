
// Name: Trapping Rain Water
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/two-pointer-technique-gfg-160/problem/trapping-rain-water-1587115621

class Solution {
    // Function to find the trapped water between the blocks.
    maxWater(arr) {
        // code here
        let st = [];
        let res = 0;
    
        for (let i = 0; i < arr.length; i++) {
           
            while (st.length > 0 && arr[st[st.length - 1]] < arr[i]) {          
                
                let pop_height = arr[st.pop()];
    
                if (st.length === 0){
                    break;
                }
    
                let distance = i - st[st.length - 1] - 1;
                let water = Math.min(arr[st[st.length - 1]], arr[i]);    
                water -= pop_height;
                res += distance * water;
            }
            st.push(i);
        }
        return res;
    }
}

let obj = new Solution();
const arr = [2, 1, 5, 3, 1, 0, 4];
let ans = obj.maxWater(arr)
console.log(ans);