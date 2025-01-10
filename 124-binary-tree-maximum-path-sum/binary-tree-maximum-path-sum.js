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
var maxPathSum = function(root) {
    let maximum = -Infinity
    function helper(node){
            if(node == null){
                return 0
            }

          let leftMax = Math.max(helper(node.left),0)
          let rightMax = Math.max(helper(node.right),0)

          let currentPathSum = node.val + leftMax + rightMax

           maximum = Math.max(maximum, currentPathSum)

        
          return node.val + Math.max(leftMax, rightMax);


    }
    helper(root)
    return maximum
};