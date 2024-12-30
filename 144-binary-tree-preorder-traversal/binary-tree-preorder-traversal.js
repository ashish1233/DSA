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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    
    let result = []
    function helper(root){
         if(!root){
            return
         }
          result.push(root.val)
          if(root.left){
             helper(root.left)
          }
          if(root.right){
             helper(root.right)
          }
    }

    helper(root)
    return result

};