/**
 * @param {number[]} nums
 * @return {number}
 */

// Understand from prepcoding

var maxSubArray = function(nums) {

    let sum =0
    maximumSum = nums[0]

    for(let i=0; i<nums.length; i++){
        sum = sum + nums[i]
        if(sum > maximumSum){
            maximumSum = sum
        }
        if( sum < 0){
            sum = 0
        }
    }

    return maximumSum
    
};




