/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
      let left =0
    let right = height.length-1
    let maximum = -Infinity

    while(left < right){

        let newHeight  = Math.min(height[left], height[right])
        let width = right - left
        let area = newHeight * width

        maximum = Math.max(maximum, area)
        if(height[left] < height[right]){
             left++
        }
        else{
            right--
        }
    
    }
    
    return maximum
};