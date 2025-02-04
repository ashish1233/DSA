/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hs = new Map()
   for(let i=0; i<nums.length; i++){
        let complement = target- nums[i]
        if(hs.has(complement)){
            return [hs.get(complement), i]
        }
        hs.set(nums[i], i)
   }
};