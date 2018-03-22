function mutation(arr) {
  
  //Set first string to all lower case
  var string1 = arr[0].toLowerCase();
  //Set second string to all lower case
  var string2 = arr[1].toLowerCase();
  //Turn string 2 into an array in order to parse characters
  var checkArr = string2.split('');
  //This will be changed to false if a letter from string 2 is not found in string 1
  var isThere = true;
  
  //This will iterate through string 2 and check if the characters are in string 1
  for(i = 0; i < checkArr.length; i++) {
    
    //Check if the character exists
    if (string1.indexOf(checkArr[i]) < 0) {
      //If character is not in string 1, set boolean to false
      isThere = false;
      //Prematurely exit the for loop, no need to traverse the rest of the array
      i = checkArr.length;
    }
  }
  
  return isThere;
}
