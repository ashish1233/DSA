/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count =0
    if(n ==0 || n==1){
        return 0
    }
    function isPrime(num){
         if(num<2){
            return false
         }
         if(num==2){
            return true
         }
         if(num==3){
            return true
         }
         if (num % 2 === 0 || num % 3 === 0) return false;
          for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
            }
            return true;
    }
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
           
            count++;
        }
    }
    return count;
}