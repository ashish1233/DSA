/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
       let m = mat.length
       let n= mat[0].length
       let queue = []
       let directions = [[0,1], [0,-1], [1, 0], [-1, 0]]
     //  let result = Array.from({length:m}, ()=> Array(n).fill())
        for(let i=0; i<m; i++){
                for(let j=0; j<n; j++){
                    if(mat[i][j]==0){
                        queue.push([i,j])
                    }
                    else{
                        mat[i][j] = -1
                    }
                }
        }
        while(queue.length>0){
            const [x, y] = queue.shift()

            for (const [dx, dy] of directions) {
                let nx = x + dx
                let ny = y + dy

                if(nx<0 || nx>=m || ny<0 || ny>=n || mat[nx][ny] !=-1 ){
                    continue
                }
                queue.push([nx, ny])
                mat[nx][ny] = mat[x][y] + 1
            }
        }
        return mat
    }
