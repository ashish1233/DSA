/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
     let adjList = Array.from({length:numCourses}, ()=> [])
      for(const [from, to] of prerequisites){
            adjList[to].push(from)
     }
     let V= adjList.length
       let visited = new Set()
        let pathVisited = new Set()
        function dfsCycleDetect(node){
            visited.add(node)
            pathVisited.add(node)
            for(let neighbour of adjList[node]){
                if(!visited.has(neighbour)){
                    if(dfsCycleDetect(neighbour)){
                        return true
                    }
                }
                else if(pathVisited.has(neighbour)){
                    return true
                }
            }
            pathVisited.delete(node)
            return false
        }
        for(let i=0; i<V; i++){
            if(!visited.has(i)){
                 if(dfsCycleDetect(i) == true){
                     return false
                 }
            }
           
        }
        return true
};

