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
 * @return {boolean}
 */


function getHeight(node){
            if(node == null){
                return 0
            }
           return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}
 
var isBalanced = function(root) {
        
        if (root === null) return true;

        let lh = getHeight(root.left)
        let rh = getHeight(root.right)

        if(Math.abs(lh-rh)> 1){
            return false
        }

        return isBalanced(root.left) && isBalanced(root.right)

};