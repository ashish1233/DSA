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
var postorderTraversal = function(root) {
      
    function treeTraversal(root, type) {
        if (root === null) return [];

        const stack = [];
        const result = [];

        if (type === 'pre') {
            stack.push(root);
            while (stack.length > 0) {
            const node = stack.pop();
            result.push(node.val);
            
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
            }
        } else if (type === 'inorder') {
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
        } else if (type === 'post') {
            stack.push(root);
            while (stack.length > 0) {
            const node = stack.pop();
            result.push(node.val);

            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
            }
          
           return result.reverse(); // Reverse to get post-order
        }

           return result;

        }

    return treeTraversal(root, "post")

};


// let result = []
//        function postOrder(root){
//                 if(root!=null){
//                     if(root.left!=null){
//                           postOrder(root.left)
//                     }
//                     if(root.right!=null){
//                            postOrder(root.right)
//                     }
//                     result.push(root.val)
//                 }
//        }

//        postOrder(root)
//        return result