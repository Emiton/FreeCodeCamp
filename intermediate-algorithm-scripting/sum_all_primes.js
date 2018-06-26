/**
 * This function takes an integer as an input. It will the return the sum of all prime
 * numbers from 0 to the input, inclusive.
 * 
**/

function sumPrimes(num) {
  var totalSum = 0;
  if (num < 2) {
    console.log ("Input not valid");
  }
  else if (num == 2) {
    totalSum = num;
  }
  else {
    for (var i = 2; i <= num; i++) {
      var isPrime = true;

      for (var j = 2; j < i; j++) {
        if(i % j == 0) {
          isPrime = false;
        }
      }

      if (isPrime) {
        totalSum += i;
      }
    }
  }
  return totalSum;
}

sumPrimes(10);