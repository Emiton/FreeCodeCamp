// This function will take two arrays and return an array of elements
// that exist in only one of the two arrays.
function diffArray(arr1, arr2) {
  // This array will hold the values that exist in only one array
  var diversityArr = [];

  // A function to find which values only exist in one of two array
  function getDifference(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) == -1) {
        diversityArr.push(arr1[i])
      }
    }
  }

  getDifference(arr1, arr2);
  getDifference(arr2, arr1);

  return diversityArr;
}