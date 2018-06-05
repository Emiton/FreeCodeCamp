// This function will take an array and subsequent arguments
// Remove all array elements that match the given arguments
function destroyer(arr) {
  
  var reducedArray = [];
  var isArgument = false;

  // Iterate through every element in the array
  for (var i = 0; i < arr.length; i++) {
    isArgument = false;

    // Compare array element to all argument entries
    for (var j = 1; j < arguments.length; j++) {
      // If match is found, change bool to true 
      if(arr[i] == arguments[j]) {
        isArgument = true;
      }
    }
    
    // If element matched an arugment, do not push it
    if (!isArgument) {
      reducedArray.push(arr[i]);
    }
  }
  return reducedArray;
}
