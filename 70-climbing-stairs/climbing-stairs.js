/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo ={}

    function helper(n){
       if(n <= 1){
        return 1
        }
    
       if (memo[n] !== undefined)
       { 
        return memo[n]; 
       
       }
    
        memo[n] = helper(n-1) + helper(n-2)

        return  memo[n]
    }
    
    return helper(n)
};