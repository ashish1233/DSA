/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result =[]
    let n = nums.length
    let subset = Math.pow(2, n)
    for(let num=0; num<subset; num++){
        let subset = []
        for(let j=0; j<n; j++){
            if(num & (1 << j)){
                subset.push(nums[j])
            }
           
        }
         result.push(subset)
    }
    return result
    
};