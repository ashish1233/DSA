/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (!digits.length) return []; // Return empty array for empty input

    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
     let result = []
    function backtracking(index, current){
          if(index == digits.length){
               result.push(current)
               return
          }
           let letters = digitToLetters[digits[index]]
           for(const letter of letters ){
                backtracking(index+1, current + letter )
           }
    }

    backtracking(0, '')
    return result
    
};