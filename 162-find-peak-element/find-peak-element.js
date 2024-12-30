/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left<right){
         let mid = Math.floor((left + right) / 2);
         if (nums[mid] < nums[mid + 1]) {
            left = mid + 1; // Peak is in the right half
        }
        else {
            right = mid; // Peak is in the left half (or mid is a peak)
        }
        
    }
    return left
};



// o(n)
// if(nums.length == 1){
//         return 0
//     }
//     if(nums.length == 2){
//         if(nums[0]> nums[1]){
//             return 0
//         }
//         else{
//             return 1
//         }
//     }
//     if(nums[0] > nums[1]){
//         return 0
//     }
//     else if(nums[nums.length-1]> nums[nums.length-2]){
//         return nums.length-1
//     }
//     for(let i = 1; i<nums.length ; i++){
//         if(nums[i] > nums[i-1] && nums[i]> nums[i+1]){
//             return i
//         }
//     }
//     return -1