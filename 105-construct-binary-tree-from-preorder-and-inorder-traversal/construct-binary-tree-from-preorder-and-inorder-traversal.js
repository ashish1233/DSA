/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

       if (!preorder.length || !inorder.length) return null;
       
        let rootVal = preorder.shift()

        const root = new TreeNode(rootVal);

        let rootIndex = inorder.indexOf(rootVal)


       let leftSubtree = inorder.slice(0, rootIndex)
       let rightSubtree = inorder.slice(rootIndex+1)

       root.left =  buildTree(preorder, leftSubtree)
       root.right = buildTree(preorder, rightSubtree)
       
       return root;

};