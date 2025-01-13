/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let n = isConnected.length
    let provience =0
    let visited= new Set()

    function dfs(node){
        visited.add(node)
        for(const [i, value] of isConnected[node].entries()){
              if(value ==1 && !visited.has(i) ){
                    dfs(i)
              }
        }
    }

    for(let i=0; i<n;i++){
        if(!visited.has(i)){
            provience++
            dfs(i)
        }
    }
    return provience
};