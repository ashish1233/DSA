/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    // let zeroEnd '0'
    // let oneaEnd= '1'
    let result =[]
    function helper(n, current){  
        if(current.length> 1){
            if(current[current.length-1] ==0 && current[current.length-1] == current[current.length-2] ){
                return
            }
         }   
        if(n==0){
         result.push(current)
         return
        }
        helper(n-1, current+'0' )
        helper(n-1, current+'1')
    }
    helper(n, '')
    return result
};