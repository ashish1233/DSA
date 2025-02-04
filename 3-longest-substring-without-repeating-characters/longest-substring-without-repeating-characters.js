/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i=0
  let j =0
  let maxLength =0
  let hs = new Map()
  while(j<s.length){
   if(hs.has(s[j]) && hs.get(s[j])>= i){
       i = hs.get(s[j]) +1
   } 
    hs.set(s[j], j )
    maxLength = Math.max(maxLength, j-i+1)
    j++
  }
  return maxLength
};











//   let i=0, j=0
//     let hs = new Map()
//     let max = 0
//     while(j < s.length){
//         hs.set(s.charAt(j), hs.get(s.charAt(j)) ? hs.get(s.charAt(j)) + 1 : 1 )
//         if(hs.size == (j-i+1)){
//            max= Math.max(max, (j-i+1) )
//            j++
//         }
//         else if (hs.size < (j-i+1) ){
//             while (hs.size < (j-i+1)){
//                 hs.set(s.charAt(i), hs.get(s.charAt(i))-1)

//                 if(hs.get(s.charAt(i)) == 0 ){
//                     hs.delete(s.charAt(i))
//                 }
//                 i++
//             }
//             j++
//         }
//     }
//     return max