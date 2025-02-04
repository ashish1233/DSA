/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let index = -1
    for(let i=nums.length-1; i>0; i--){
        if(nums[i-1]<nums[i]){
           index = i-1
           break
        }
    }
    if(index == -1){
        nums.reverse()
        return
    }
    for(let i=nums.length-1; i>0; i--){
        if(nums[index] < nums[i]){
            let temp = nums[i]
            nums[i] = nums[index]
            nums[index] = temp
            break
        }
    }

    const remainingRight = nums.splice(index+1)
    const remainingRightreverse = remainingRight.reverse()
    nums.splice(nums.length, 0, ...remainingRightreverse )
    
};


// [1,3, 9,4,2]
//[1,4, 9, 3, 2]
// [1,4,2,3,9]
// Step to find a number 