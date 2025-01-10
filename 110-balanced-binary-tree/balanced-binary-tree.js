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
var isBalanced = function(root) {
    function checkHeight(node){
            if(node == null){
                return 0
            }
            let lh = checkHeight(node.left)
             if(lh ==-1){
                return -1
            }

            let rh= checkHeight(node.right)
            if(rh ==-1){
                return -1
            }

            if(Math.abs(lh-rh) > 1){
                return -1
            }

            return Math.max(lh, rh) +1
    }
    return checkHeight(root) != -1
};