/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
     const m = matrix.length;
    const n = matrix[0].length;

    // Initialize the DP matrix with the same dimensions as the input matrix
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    let count = 0; // To store the total count of square submatrices

    // Iterate through the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Only calculate DP value if the current matrix value is 1
            if (matrix[i][j] === 1) {
                // If we are at the first row or first column, the largest square is just the current cell
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    // Calculate the size of the largest square submatrix ending at (i, j)
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                // Add the size of the square submatrix ending at (i, j) to the count
                count += dp[i][j];
            }
        }
    }

    return count;
};