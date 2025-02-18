/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
   
    if(nums.length==0){
        return 0
    }

    let n= nums.length
    let hs = new Set()
     let longest = 1
    for(let i=0; i<nums.length; i++){
        hs.add(nums[i])
    }
    for(const value of hs){
        if(!hs.has(value-1)){
            let count =1
            let current = value

            while(hs.has(current+1)){
                count++
                current= current+1
            }
            longest = Math.max(longest, count)
        }
    }
    
    return longest
};