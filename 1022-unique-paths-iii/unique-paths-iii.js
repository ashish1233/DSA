/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {

    const rows = grid.length;
    const cols = grid[0].length;
    let startX = 0, startY = 0, emptyCount = 0;

    // Find the start position and count empty squares
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                startX = i;
                startY = j;
            } else if (grid[i][j] === 0) {
                emptyCount++;
            }
        }
    }

     const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let pathCount = 0;

    function backtrack(x, y, remaining){

        if(x<0 || y<0 || x>=rows || y>= cols || grid[x][y] ==-1){
            return
        }

        if(grid[x][y] == 2){
            if(remaining == 0){
                pathCount++
            }
            return
        }

        let temp = grid[x][y]
        grid[x][y]= -1

        for(let [dx, dy] of directions){
            backtrack(x+dx, y+dy, remaining-1)
        }

         grid[x][y]= temp

    }

    backtrack(startX, startY , emptyCount+1)
    return pathCount
    
};