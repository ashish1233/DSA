/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length

  let row = Array(m).fill(0)
  let column = Array(n).fill(0)


  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
        if(matrix[i][j]==0){
            row[i] = 1
            column[j] = 1
        }
    }
  } 

  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++ ){
        if(row[i] == 1 || column[j] == 1){
            matrix[i][j] = 0
        }
    }
  } 

  return matrix
};