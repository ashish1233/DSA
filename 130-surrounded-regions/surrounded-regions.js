/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length === 0) return;

    let rows = board.length
    let cols = board[0].length

    function dfs(i, j){
          
          if(i< 0 || j<0 || i>=rows || j>=cols || board[i][j] !== 'O'){
             return 
          }

           board[i][j] ='#'

            dfs(i, j+1)
            dfs(i, j-1)
            dfs(i+1, j)
            dfs(i-1, j)
    }

    for(let i=0; i<rows; i++){
        dfs(i, 0)
        dfs(i, cols-1)

    }
    for(let j=0; j<cols; j++){
        dfs(0, j)
        dfs(rows-1, j)
    }

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(board[i][j]== 'O'){
                board[i][j] = 'X'
            }
            else if(board[i][j] == '#'){
                  board[i][j] = 'O'
            }
        }
    }
};