/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newStr = s.trimStart()
    let updtadedStr = newStr.trimEnd()

    let arr= updtadedStr.split(" ")
   
    let newarr = []
    for(let i=0; i<arr.length; i++){
        // let temp1 = arr[i].trimStart()
        // let temp2 = arr[i].trimEnd()
         if(arr[i]){
             newarr.push(arr[i])
         }
       
    }

    let updatedArr= newarr.reverse().join(" ")
    return updatedArr
};