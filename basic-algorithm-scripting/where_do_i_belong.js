function getIndexToIns(arr, num) {
  //Sets index to 0, if num is smaller than entries in array, index remains 0
  var correctIndex = 0;
  
  //Loop will compare num to every entry
  //If num is greater than an entry, add one to its index
  for (var i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      correctIndex += 1;
    }
  }
  return correctIndex;
}
