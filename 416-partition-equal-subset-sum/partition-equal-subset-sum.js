/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
   
      const totalSum = nums.reduce((sum, num) => sum + num, 0);

    // If the total sum is odd, it's impossible to split it into two equal subsets
    if (totalSum % 2 !== 0) {
        return false;
    }

    const target = totalSum / 2;
    const dp = new Array(target + 1).fill(false);

    dp[0] = true; // Base case: sum of 0 is always possible

    for (const num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    return dp[target];
};