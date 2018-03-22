function chunkArrayInGroups(arr, size) {
  
  //Will hold arrays that have been split up
  var holderArray = [];
  
  var arrayLength = arr.length;
  
  //Loop used to split up arrays
  for(var i = 0; i < arrayLength; i += size) {
    //Will hold piece of array that was split
    var tempArray = [];
    //Used to slice up until boundary
    var boundary = i + size;
    
    //Checks if boundary is out of bounds of original array
    if (boundary >= arrayLength) {
      //If out of bounds, only slice until end of array
      tempArray = arr.slice(i,arrayLength);
    } else {
      //If within bounds, slice until designated boundary
      tempArray = arr.slice(i,boundary);
    }
    
    //Push sliced array into holder array
    holderArray.push(tempArray);
  }
  
  return holderArray;
}
