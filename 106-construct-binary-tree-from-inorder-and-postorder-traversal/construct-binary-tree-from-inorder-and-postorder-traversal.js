/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    if(!inorder.length || !postorder.length){
        return null
    }

     let rootVal = postorder.pop()

      const root = new TreeNode(rootVal);

      let rootIndex = inorder.indexOf(rootVal)

      let leftSubtree = inorder.slice(0, rootIndex)
      let rightSubtree = inorder.slice(rootIndex+1)

       root.right = buildTree(rightSubtree, postorder)
       root.left = buildTree(leftSubtree, postorder)


       return root
    
};