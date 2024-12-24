/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
        function editDistance(str1, str2, m, n, memo = {}) {
        // Check if the result is already computed and stored in the memo object
        if (`${m},${n}` in memo) {
            return memo[`${m},${n}`];
        }

        // Base cases
        if (m === 0) return n;  // If str1 is empty, we need to insert all characters of str2
        if (n === 0) return m;  // If str2 is empty, we need to delete all characters of str1

        // If the last characters are the same, no operation is needed
        if (str1[m - 1] === str2[n - 1]) {
            return editDistance(str1, str2, m - 1, n - 1, memo);
        }

        // If the last characters are different, consider all possibilities:
        // 1. Insert a character (so move in str2)
        // 2. Delete a character (so move in str1)
        // 3. Substitute a character (move in both str1 and str2)
        const insertOp = editDistance(str1, str2, m, n - 1, memo);
        const deleteOp = editDistance(str1, str2, m - 1, n, memo);
        const substituteOp = editDistance(str1, str2, m - 1, n - 1, memo);

        // Store the result in the memo object and return the minimum of these three operations + 1
        memo[`${m},${n}`] = Math.min(insertOp, Math.min(deleteOp, substituteOp)) + 1;

        return memo[`${m},${n}`];
    }
    return editDistance(word1, word2, word1.length, word2.length, {} )
};