
function findLongestWord(str) {
  
  //Create array of string to be manipulated
  var inputArray = str.split(' ');
  //Will store length of largest string
  var largestString = 0;
  
  //Will traverse the array and replace the value of largestString if larger value is found
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > largestString) {
      largestString = inputArray[i].length;
    }
  }
  return largestString;
}
