/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList)
    if(!wordSet.has(endWord)){
        return 0
    }

    const queue = [[beginWord, 1]]

    while(queue.length>0){
        const [currentWord, steps] = queue.shift()

        if(currentWord == endWord){
            return steps
        }
        for(let i=0; i<currentWord.length; i++){
            const originalChar = currentWord[i]
            for(let charcode = 97; charcode<=122; charcode++){
                const newChar = String.fromCharCode(charcode)
                if(newChar == originalChar){
                    continue
                }
                const newWord = currentWord.slice(0, i) + newChar + currentWord.slice(i+1)
                if(wordSet.has(newWord)){
                    queue.push([newWord, steps+1])
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0
};