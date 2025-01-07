/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //  let needleLength = needle.length
    //  let index = -2
    //  for(let i=0; i<haystack.length; i++){
    //    if(haystack.substring(i, i+needleLength) == needle){
    //      return index=i
    //    }
       
    //  }
    //  return index>-2 ? index : -1

    return haystack.indexOf(needle)
};