function largestOfFour(arr) {
  
  //The largest number from each sub array will be pushed to this main array
  var answerArray = [];
  
  //For loop used to separate the sub arrays
  for (var i = 0; i < arr.length; i++) {
    var subArray = arr[i];
    
    //Used to store the largest value in the sub array
    var largestValue = -1;
    
    //Used to traverse sub array and compare each value to largest value
    for (var j = 0; j < subArray.length; j++) {
      if (subArray[j] > largestValue) {
        largestValue = subArray[j];
      }
    }
    
    //Push largest value from each sub array to the answer array
    answerArray.push(largestValue);
  }
  return answerArray;
}
