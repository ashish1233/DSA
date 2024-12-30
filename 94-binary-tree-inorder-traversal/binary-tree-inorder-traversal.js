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
var inorderTraversal = function(root) {
    let result = []
    let stack = []
    let currentNode = root
    while(stack.length > 0 || currentNode !=null){
        while(currentNode !=null){
            stack.push(currentNode)
            currentNode = currentNode.left
        }
       currentNode = stack.pop();
       result.push(currentNode.val)
        currentNode = currentNode.right
    }
    return result
};