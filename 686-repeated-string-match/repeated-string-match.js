/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
   const repeatCount = Math.ceil(b.length / a.length); // Minimum repetitions needed
    const repeatedA = a.repeat(repeatCount); // Repeat A `repeatCount` times

    // Check if B is a substring of the repeated A
    if (repeatedA.includes(b)) {
        return repeatCount;
    }

    // Check with one more repetition
    if ((repeatedA + a).includes(b)) {
        return repeatCount + 1;
    }

    // If B is not a substring, return -1
    return -1;
};