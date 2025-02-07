/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit=0
    let profit=0
    for(let i=1; i<prices.length; i++){
        if(prices[i]>prices[i-1]){
            profit = prices[i]-prices[i-1]
            maxProfit+=profit
        }
    }
    return maxProfit
};