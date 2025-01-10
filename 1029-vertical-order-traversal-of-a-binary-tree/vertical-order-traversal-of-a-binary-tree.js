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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    let hs = new Map()
    let minLevel = Infinity
    let maxLevel = -Infinity
    let result = []
    function helper(node, level, row){
        
            if(node == null){
                return
            }
    
            minLevel= Math.min(minLevel, level)
            maxLevel= Math.max(maxLevel, level)
            if(!hs.has(level)){
                hs.set(level, [])
            }
            hs.get(level).push([node.val, row]);

    // Traverse left and right children
            helper(node.left, level - 1, row + 1);  // Left node decreases level by 1
            helper(node.right, level + 1, row + 1); // Right node increases leve
    }

    helper(root, 0, 0)
  for (let i = minLevel; i <= maxLevel; i++) {
    // Sort by row and then by value
    let sorted = hs.get(i).sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];  // Sort by value (ascending)
        }
        return a[1] - b[1];  // Sort by row (top to bottom)
    }).map(item => item[0]);  // Extract only the value after sorting

    result.push(sorted);
}
    return result
};