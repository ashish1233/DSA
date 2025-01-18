/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
     let n= heights.length
      const pse = new Array(n)
      const nse = new Array(n)
      let stack = []; 
     let maxArea =0

        for(let i=0; i<n; i++){
            while(stack.length >0 && heights[stack[stack.length-1]] >= heights[i] ){
                stack.pop()
            }
            pse[i] = stack.length == 0 ? -1 : stack[stack.length-1]
            stack.push(i)
        }

        stack.length = 0
        for(let j=n-1; j>=0; j--){
            while(stack.length > 0 && heights[stack[stack.length-1]] >=  heights[j]){
                stack.pop()
            }
             nse[j] = stack.length == 0 ?  n : stack[stack.length-1]
             stack.push(j)
        }
       
        for(let i=0; i<heights.length; i++){
            let height = heights[i]
            console.log(height,  pse[i], "--->")
            let width = nse[i] - pse[i] - 1
            let area = height * width
            if(area> maxArea){
                maxArea = area
            }
        }
    return maxArea
};