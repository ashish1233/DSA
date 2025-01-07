/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     let newStr = s.trimStart()
     let updtadedStr = newStr.trimEnd()

      
     let words= updtadedStr.split(" ")

     let filterwords = words.filter((word)=> word != '')
    
     let reversewords = filterwords.reverse()

     return reversewords.join(' ')

};



// let newStr = s.trimStart()
//     let updtadedStr = newStr.trimEnd()

//     let arr= updtadedStr.split(" ")
   
//     let newarr = []
//     for(let i=0; i<arr.length; i++){
//          if(arr[i]){
//              newarr.push(arr[i])
//          }
       
//     }

//     let updatedArr= newarr.reverse().join(" ")
//     return updatedArr