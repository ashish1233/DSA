/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count =1
    let i=1
    for(let j=1; j<nums.length; j++){
        if(nums[j] == nums[j-1]){
            count++
        }
        else{
            count = 1
        }

        if(count <=2){
            nums[i] = nums[j]
            i++
        }
    }
    return i
};