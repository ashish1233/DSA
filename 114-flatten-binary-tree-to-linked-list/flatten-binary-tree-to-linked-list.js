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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root){
        return null
    } 
    let current = root
    while(current){
        if(current.left){
            let rightmost = current.left
            while(rightmost.right){
                rightmost = rightmost.right
            }

            rightmost.right = current.right
            current.right = current.left
            current.left = null
        }

        current = current.right
    }

};