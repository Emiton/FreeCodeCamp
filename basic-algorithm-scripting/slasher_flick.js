function slasher(arr, howMany) {
  
  //Array used to hold remaining elements of slashed array
  var holderArray = [];
  var arrayLength = arr.length;
  
  //If # of elements to be chopped are greater than # of elements than do nothing
  //Otherwise execute the following script
  if (howMany < arrayLength) {
    //Will hold new truncated array
    var tempArray = arr.splice(howMany, arrayLength);
    
    //Iterate over the temporary array and push truncated elements to holder array
    for (var i = 0; i < tempArray.length; i++) {
      holderArray.push(tempArray[i]);
    }
     
    }
    
 
  return holderArray;
}
