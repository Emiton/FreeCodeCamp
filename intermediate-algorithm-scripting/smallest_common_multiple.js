/**
 * 
 * 
 * Resources: 
 * -https://math.stackexchange.com/questions/1039519/finding-prime-factors-by-taking-the-square-root
 * -https://artofproblemsolving.com/wiki/index.php?title=Least_common_multiple
**/

function smallestCommons(arr) {
  var highestOrderFactors = {};
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    var currentFactorsArray = [];
    currentFactorsArray = primeFactorization(i);
    currentFactorsArray.sort();

    
    // count factors
    // check if factor in array
      // if in, check if greater than push
      // if not, add factor and number into array
    
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

function countFactors (factorArray) {
  var countedFactorArray = [];
  var currentValue = factorArray[0];
  for (var i = 0; i < factorArray.length; i++) {
    
  } 
}


smallestCommons([1,5]);