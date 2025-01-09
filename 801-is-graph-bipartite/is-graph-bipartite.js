/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
   let node = graph.length
   let color = Array(node).fill(-1)

    function bfs(start){
       let queue = [start]
       color[start] = 0

       while(queue.length> 0){
         const currentNode = queue.shift()
         const currentNodeColor = color[currentNode]

        for(const neighbour of graph[currentNode]){
            if(color[neighbour] == -1){
                color[neighbour] = 1- currentNodeColor
                queue.push(neighbour)
            }
            else if(color[neighbour] == currentNodeColor){
                return false
            }
        }

       }
       return true
    }

    for(let i=0;i<node; i++){
        if(color[i] == -1){
            if(bfs(i) == false){
                return false
            }
        }
    }
    return true


};




//  let n = graph.length
//     let colors = Array(n).fill(-1)

//     function bfs(start){
//         let queue  = [start]
//         colors[start] = 0

//         while(queue.length >0){
//             const node = queue.shift()

//             for(const neighbour of graph[node]){
//                 if(colors[neighbour] == -1){
//                     colors[neighbour] = 1- colors[node]
//                     queue.push(neighbour)
//                 }
//                 else if( colors[neighbour] == colors[node]){
//                     return false
//                 }
//             }
//         }
//         return true
//     }

//     for(let node =0; node <n ; node ++){
//         if(colors[node] == -1){
//             if(!bfs(node)){
//                 return false
//             } 
//         }
//     }
//     return true