/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root){
        return []
    }
    let queue = []
    let result = []
    queue.push(root)
    let flag = false
    while(queue.length >0){
        flag = !flag
        let size = queue.length
        let temp = []
        for(let i=0; i<size;i++){
            let node = queue.shift()
            temp.push(node.val)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            
        }
        if(flag){
                result.push(temp)
            }
            else{
                result.push(temp.reverse())
            }
    }

       return result
};


// if(!root){
//           return []
//       }
       
//        let queue = []
//        queue.push(root)
//         var result = []
//         var flag = false
//        while(queue.length){
//             flag = !flag
//             var temp = []
//            let size = queue.length
//            for(let i=0; i<size; i++){
//               let node = queue.shift()
//               temp.push(node.val)
//                if(node.left){
//                queue.push(node.left)
//            }
//              if(node.right){
//                queue.push(node.right)
//            }
//            }
//            if(flag){
//               result.push(temp)
//            }
//            else{
//                result.push(temp.reverse())
//            }
          
//        }
//        return result