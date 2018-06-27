/**
 * 
 * 
 * Resources: 
 * -https://math.stackexchange.com/questions/1039519/finding-prime-factors-by-taking-the-square-root
 * -https://artofproblemsolving.com/wiki/index.php?title=Least_common_multiple
**/

function smallestCommons(arr) {
  var highestOrderFactorsArray = [];
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    
  }
  return arr;
}


function primeFactorization(num) {
  var factorArray = [];
  var factorOrderArray = [];

  while (num % 2 == 0) {
    factorArray.push(2);
    num /= 2;
  }

  for (var i = 3; i <= Math.sqrt(num); i+= 2) {

    while(num % i == 0) {
      factorArray.push(i);
      num /= i;
    }
  }

  if (num > 2) {
    factorArray.push(num);
  }

  

  return factorArray;
}


smallestCommons([1,5]);