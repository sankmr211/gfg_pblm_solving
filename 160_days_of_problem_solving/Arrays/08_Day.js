
// Name: Stock Buy and Sell – Multiple Transaction Allowed
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/stock-buy-and-sell2615

class Solution {
    maximumProfit(prices) {
        // your code here
        let min = prices[0]
        let max = 0
        for (let i = 1; i < prices.length; i++) {
            const element = prices[i];
            min = Math.min(min, element)
            max = Math.max(max, element - min)
        }
        return max
    }
}

let obj = new Solution();
let ans = obj.maximumProfit([7, 10, 1, 3, 6, 9, 2]);
console.log(ans);