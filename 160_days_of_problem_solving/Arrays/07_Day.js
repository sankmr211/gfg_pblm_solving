
// Name: Stock Buy and Sell – Multiple Transaction Allowed
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/stock-buy-and-sell2615

class Solution {
    maximumProfit(prices) {
        // code here
        let profit = 0
        for (let i = 1; i < prices.length; i++) {
            if(prices[i] > prices[i -1]){                
                profit += prices[i] - prices[i -1]
            }
        }
        return profit
    }
}

let obj = new Solution();
let ans = obj.maximumProfit([100, 180, 260, 310, 40, 535, 695]);
console.log(ans);