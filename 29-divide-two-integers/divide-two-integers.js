/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === -(2 ** 31) && divisor === 1) {
        return -(2 ** 31);
    }
    if (dividend === -(2 ** 31) && divisor === -1) {
        return 2 ** 31 - 1;
    }

    // Determine the sign of the result
    const isNegative = (dividend < 0) !== (divisor < 0);

    // Work with absolute values
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    let quotient = 0;

    // Subtract divisor from dividend while it fits
      for (let i = 31; i >= 0; i--) {
        if ((absDividend >>> i) >= absDivisor) {
            quotient += 1 << i; // Add 2^i to the quotient
            absDividend -= absDivisor << i; // Subtract (divisor * 2^i) from dividend
        }
    }

    // Apply the sign to the result
    return isNegative ? -quotient : quotient;

};


// sign
// overflow condition