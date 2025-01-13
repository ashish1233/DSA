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
var widthOfBinaryTree = function(root) {
    if(!root){
        return 0
    }
    let max = 0
    let queue = [[root, 0]]

    while(queue.length >0){
        let numberOfNodes = queue.length
       const levelStartIndex = queue[0][1]; // Index of the first node at this level

        let firstIndex = 0
        let lastIndex = 0
        for(let i=0; i<numberOfNodes; i++){
            const [node, index] = queue.shift()
           const normalizedIndex = index - levelStartIndex; // Normalize indices to prevent overflow

            if(i==0){
                firstIndex = normalizedIndex
            }
            if(i==numberOfNodes-1){
                lastIndex = normalizedIndex
            }
            if(node.left){
                queue.push([node.left, 2*normalizedIndex+1])
            }
            if(node.right){
                queue.push([node.right, 2*normalizedIndex+2])
            }
        }
        max = Math.max(max, lastIndex-firstIndex+1)
    }

    return max
};