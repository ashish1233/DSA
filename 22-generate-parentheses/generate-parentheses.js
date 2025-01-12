/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    function helper(open, close, current) {
        // Base case: If the current string has reached the maximum length (2 * n)
        if (open === n && close === n) {
            result.push(current);
            return;
        }

        // Add an opening parenthesis if we still have available `(`
        if (open < n) {
            helper(open + 1, close, current + '(');
        }

        // Add a closing parenthesis if it doesn't exceed the number of opening ones
        if (close < open) {
            helper(open, close + 1, current + ')');
        }
    }

    helper(0, 0, '');
    return result;
};