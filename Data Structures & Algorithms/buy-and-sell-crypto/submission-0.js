class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyPrice = prices[0];
        let maxProfit = 0;

        for(let price of prices){
            if(price < buyPrice){
                buyPrice = price
            }else{
                let currentProfit = price - buyPrice;
                maxProfit = Math.max(maxProfit,currentProfit)
            }
        }
        return maxProfit;
    }
}
