/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
   let m= grid.length
   let n= grid[0].length

   let freshOranges = 0
   let queue = []
   for(let i=0; i<m; i++){
     for(let j=0; j<n; j++){
        if(grid[i][j]==2){
           queue.push([i,j])
        }
        else if(grid[i][j]==1){
            freshOranges++
        }
     }
   }
   
   if(freshOranges ==0){
      return 0
   }
   let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
   ]
   let minutes =0
   while(queue.length > 0){
        let size = queue.length
        
        let rotten = false
        for(let i=0; i<size; i++){
             let [rci, rcj] = queue.shift()    
             for(let i=0; i<directions.length; i++){
                  let [row, col] = directions[i]
                  let newCordinateRow = rci + row
                  let newCordinateCol =  rcj + col
                
                  if(newCordinateRow >=0 && newCordinateRow < m && newCordinateCol>=0 && newCordinateCol<n && grid[newCordinateRow][newCordinateCol] ==1 ){
                        grid[newCordinateRow][newCordinateCol] = 2
                        freshOranges--
                        rotten = true
                        queue.push([newCordinateRow, newCordinateCol ])
                  }
             }
        }
        if(rotten){
            minutes++
        }
   }
    return freshOranges == 0 ? minutes : -1 
};