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
       function checkHeight(node) {
        if (!node) return 0; // A null tree has height 0

        // Recursively get the height of the left and right subtrees
        const leftHeight = checkHeight(node.left);
        const rightHeight = checkHeight(node.right);

        // If either subtree is unbalanced, propagate -1
        if (leftHeight === -1 || rightHeight === -1) return -1;

        // If the current node is unbalanced, return -1
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        // Return the height of the current tree
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Check if the tree is balanced
    return checkHeight(root) !== -1;
};