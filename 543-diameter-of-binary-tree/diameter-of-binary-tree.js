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



var diameterOfBinaryTree = function(root) {
        let  diameter= 0
        function heightOfBT(root, diameterObj){
        if(root == null){
            return 0
        }
        let lh = heightOfBT(root.left)
        let rh = heightOfBT(root.right)
        diameter = Math.max(diameter, lh + rh)
        return 1+ Math.max(lh, rh)

        }
        heightOfBT(root) 
        return diameter   
};