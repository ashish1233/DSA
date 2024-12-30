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

       if (root === null) return [];

        const stack = [];
        const result = [];

     let currentNode = root;
            while (stack.length > 0 || currentNode !== null) {
            while (currentNode !== null) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            }

            currentNode = stack.pop();
            result.push(currentNode.val);
            currentNode = currentNode.right;
            }
            return result
}


//  let result = []
//      function helper(root){
//          if(root !=null){
//             if(root.left !=null){
//                 helper(root.left)
//             }
//              result.push(root.val)
//              if(root.right !=null){
//                 helper(root.right)
//             }

//          }
//      }
//      helper(root)
//      return result