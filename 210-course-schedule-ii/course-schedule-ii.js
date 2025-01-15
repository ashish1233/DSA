/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
    let adjList = Array.from({length: numCourses}, ()=> [])
    for (const [from , to] of prerequisites){
        adjList[to].push(from)
    }
    let visited = new Set()
    let pathVisited = new Set()
    let stack = []
    function dfs(node){
        visited.add(node)
        pathVisited.add(node)
        for(let neighbour of adjList[node]){
            if(!visited.has(neighbour)){
                if(dfs(neighbour)){
                    return true
                }
            }
            else if(pathVisited.has(neighbour)){
                 return true
            }
        }
         stack.push(node)
         pathVisited.delete(node)
         return false
    }
    
    for(let i=0; i<adjList.length ; i++){
        if(!visited.has(i)){
            if(dfs(i) == true){
                return []
            }
        }
    }
    return stack.reverse()
};

// 0--->1--->3
// |
// |
// 2