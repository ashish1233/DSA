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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
      if(!root && !subRoot ){
        return true
      }
      if(!root || !subRoot ){
         return false
      }

      function isSameTree(subroot, subrootNode){
            if(!subroot && !subrootNode){
                return true
            }
            if(!subroot || !subrootNode){
                return false
            }
            if(subroot.val != subrootNode.val ){
                return false
            }
           
           return (
               isSameTree(subroot.left, subrootNode.left) &&
               isSameTree(subroot.right, subrootNode.right)
           )

      }

       function dfs(node) {
        if (!node) return false; // Reached the end of the tree

        // Check if the current subtree matches subRoot
        if (isSameTree(node, subRoot)) return true;

        // Continue searching in the left and right subtrees
        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
};