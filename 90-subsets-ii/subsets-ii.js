/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = []
    function helper(index, nums, ds, res){
          result.push([...ds])
          for(let i=index; i<nums.length; i++){
              if( i!=index && nums[i] == nums[i-1]){
                continue
              }
              ds.push(nums[i])
              helper(i+1, nums, ds, result)
              ds.pop()
          }
         
    }
    nums.sort((a,b)=> a-b)
    helper(0, nums, [], result)
    return result
};