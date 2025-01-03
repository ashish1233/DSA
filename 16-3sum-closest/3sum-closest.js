/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=> a-b)

    let n= nums.length
    let closestSum = Infinity
    for(let i=0; i< n-2 ; i++){
         let left = i+1
         let right = n-1
         
         while(left <right){
                let currentSum = nums[i] + nums[left] +nums[right]
                if(Math.abs(target-currentSum) < Math.abs(target-closestSum) ){
                    closestSum = currentSum
                }
                if(currentSum < target){
                    left++
                }
                else if(currentSum > target){
                    right--
                }
                else{
                    return currentSum
                }
         }
       
    }
      return closestSum
};