/**
 * This function will accept two or more arrays and return an array which contains all
 * unique values from the original set of arrays. The values in the returned array should
 * be in the order in which they appear. The array should not be sorted.
 * 
**/

function uniteUnique(arr) {
  var uniqueValuesArr = [];
  // Iterate through each array
  for(var i = 0; i < arguments.length; i++) {
    // Iterate through each element (number) in the array
    arguments[i].forEach(function (number) {
      if (uniqueValuesArr.indexOf(number) == -1) {
        uniqueValuesArr.push(number);
      }
    });
  }
  return uniqueValuesArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);