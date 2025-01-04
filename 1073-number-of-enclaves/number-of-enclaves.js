/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    if(grid.length ==0){
        return 0
    }
    let rows= grid.length
    let cols= grid[0].length
    let count =0

    function dfs(i, j){

        if(i<0 || j<0 || i>=rows || j>=cols || grid[i][j] !=1){
            return 
        }

        grid[i][j] = 'P'

        dfs(i, j+1)
        dfs(i, j-1)
        dfs(i+1, j)
        dfs(i-1, j)
    }

    for(let i=0; i<rows ; i++){
        dfs(i, 0)
        dfs(i, cols-1)
    }
    for(let j=0; j<cols; j++){
          dfs(0, j)
          dfs(rows-1, j)
    }
    for(let i=0; i<rows;i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] == 1){
                count++
            }
        }
    }
    return count
};