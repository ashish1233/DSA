/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    
    let m= matrix.length
    let n= matrix[0].length
    let maxi =0
    let height = Array(n).fill(0)

    var largestRectangleArea = function(heights) {
     let maxArea =0   
     let n= heights.length
      const pse = new Array(n)
      const nse = new Array(n)
      let stack = []; 

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
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(matrix[i][j] ==1){
                height[j]++
            }
            else{
                height[j] = 0
            }
        }
        console.log(height, "height---")
        let area = largestRectangleArea(height)
        maxi = Math.max(maxi, area)
    }
    return maxi

}