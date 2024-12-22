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
// var preorderTraversal = function(root) {
//         let curr = root
//     var preorder = []
//     while(curr !=null){
//          if(curr.left == null){
//             preorder.push(curr.val)
//             curr = curr.right 
//          }
//          else{
//             let prev = curr.left
//             while(prev.right && prev.right != curr){
//                 prev = prev.right
//             }
//             if(prev.right == null ){
//                 prev.right = curr
//                 preorder.push(curr.val)
//                 curr = curr.left
//             }
//             else{
//                 prev.right = null
//                 curr= curr.right
//             }

//          }
//     }
//   return preorder
// };

//Recursive
var preorderTraversal = function(root) {
         let result = []
         function preOrder(root){
                 if(root != null) {
                     result.push(root.val)
                     if(root.left!=null){
                        preOrder(root.left)
                     }
                     if(root.right!=null){
                          preOrder(root.right)
                     }

                 }
         }

         preOrder(root)
         return result
};