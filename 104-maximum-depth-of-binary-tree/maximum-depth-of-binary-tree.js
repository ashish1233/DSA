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
 * @return {number}
 */
var maxDepth = function(root) {
     
     if(root == null){
         return 0
     }

     let lh = maxDepth(root.left)
    let rh = maxDepth(root.right)



     return 1+ Math.max(lh,rh)


};

// 1+ maxDepth(9)
//   1 + 1 + 0
// 1+ maxDepth(20)

// 1 + 1 +  max(maxDepth(15) ,  maxDepth(7))
// 1 + 1 + 1 + 0

// 1+ Max(lh, rh)