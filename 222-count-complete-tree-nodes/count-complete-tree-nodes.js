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
var countNodes = function(root) {
     const getLeftHeight = (node) => {
        let height = 0;
        while (node) {
            height++;
            node = node.left;
        }
        return height;
    };

    // Function to calculate the height of the rightmost path
    const getRightHeight = (node) => {
        let height = 0;
        while (node) {
            height++;
            node = node.right;
        }
        return height;
    };

    const leftHeight = getLeftHeight(root);
    const rightHeight = getRightHeight(root);

    if (leftHeight === rightHeight) {
        // If the heights are the same, it's a perfect binary tree
       // return (1 << leftHeight) - 1; // 2^h - 1
      return Math.pow(2, leftHeight) -1
    } else {
        // Otherwise, recursively count nodes in left and right subtrees
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
};