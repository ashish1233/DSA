/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
       if(s.length<1){
         return ''
       }
       let start=0
       let end=0

       for(let i=0; i<s.length;i++){
            
            function expandAroundCenter(left, right){
                while(left>=0 && right<s.length && s[left] == s[right]){
                    right++
                    left--
                }
                return right-left-1
            }
         
            let l1 = expandAroundCenter(i, i)
            let l2 = expandAroundCenter(i, i+1)
            let len = Math.max(l1, l2)

            if(len > end- start){
                start = i - Math.floor((len-1)/2)
                end = i+ Math.floor((len)/2)
            }
       }

       return s.substring(start, end+1)


}
    

