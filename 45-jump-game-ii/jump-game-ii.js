/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
   let result =0 
   let l=0
    let r=0
     let farthest=0
   while(r<nums.length-1){
      
       for(let i=l ; i<r+1; i++){
           farthest= Math.max(farthest, i+nums[i])
       }
       l= r+1
       r= farthest
       result++
   }
   return result
};