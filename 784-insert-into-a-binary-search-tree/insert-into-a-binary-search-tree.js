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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    //let result = []
    if(!root){
                let root = new TreeNode(val)
                return root
            }
     let current = root
    function helper(current, prev, val){   
        if(!current){

            if(prev.val > val){
                prev.left = new TreeNode(val)
            }
            else{
                prev.right = new TreeNode(val)
            }
            return root
        }
      
        if(val < current.val ){
            return helper(current.left, current, val)
        }
        else if(val > current.val ){
           return helper(current.right, current, val)
        }
    }
   return helper(current, null, val)
};