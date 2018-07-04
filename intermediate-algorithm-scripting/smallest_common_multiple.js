/**
 * Resources: 
 * -https://math.stackexchange.com/questions/1039519/finding-prime-factors-by-taking-the-square-root
 * -https://artofproblemsolving.com/wiki/index.php?title=Least_common_multiple
**/

function smallestCommons(arr) {
  // Object will hold unique prime factors for all numbers included
  // Key is the prime factor
  // Value is the # of times it occur (only the most frequent occurence for a single number is stored)
  var highestOrderFactors = {};
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    var currentFactorsArray = [];
    // Get all prime factors
    currentFactorsArray = primeFactorization(i);
    // Sort and count the prime factors
    var sortedAndCountedFactors = countFactors(currentFactorsArray);
    // Create array of unique prime factors for current number
    var allFactors = Object.keys(sortedAndCountedFactors);
    // Add factors to highestOrderFactors
    // If it exists, only replace if factors occurs more frequently
    // If does not exist, add to object
    for (var j = 0; j < allFactors.length; j++) {
      if (highestOrderFactors.hasOwnProperty(allFactors[j])) {
        if (sortedAndCountedFactors[allFactors[j]] > highestOrderFactors[allFactors[j]]) {
          highestOrderFactors[allFactors[j]] = sortedAndCountedFactors[allFactors[j]];
        }
      } else {
          highestOrderFactors[allFactors[j]] = sortedAndCountedFactors[allFactors[j]];
      }
    }
  }
  var total = 1; 
  // Get all the factors
  var commonFactors = Object.keys(highestOrderFactors); 
  // Multiply all of the prime factors to find the smallest common multiple
  for (var i = 0; i < commonFactors.length; i++) {
    var factor = parseInt(commonFactors[i]);
    var power = highestOrderFactors[ commonFactors[i] ];
    total *= Math.pow(factor,power);

  }
  return total;
}


function primeFactorization(num) {
  var factorArray = [];

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

  factorArray.sort();

  return factorArray;
}

// Takes an array of factors and counts them
// Returns an object with factors as keys and occurences as values
function countFactors (factorArray) {
  var countedFactors = {};
  var factorCount = 0;
  var currentValue = factorArray[0];
  var i = 0;
  while (i < factorArray.length) {
    factorCount = factorArray.lastIndexOf(factorArray[i]) - i + 1;
    countedFactors[ factorArray[i] ] = factorCount;
    i += factorCount;
  } 
  return countedFactors;
}


smallestCommons([1,5]);