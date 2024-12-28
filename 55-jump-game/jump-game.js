/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
     let max =0
	for(let i=0; i< nums.length; i++){
        if(i> max){
			return false
		}
		let num = i+ nums[i]
        max = Math.max(max, num)

        if(max >= nums.length-1){

 			return true
		}
                        
	}
    

};

















//   let j = nums.length-1
//      for(let i=nums.length-2; i>=0; i-- ){
//          if(nums[i]>= j-i){
//             j= i 
//          }
//          console.log(j)
//      }
//      if(j==0){
//              return true
//          }
//          else{
//              return false
//          }