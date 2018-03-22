
function palindrome(str) {

  //Create a string with only alpha numeric characters
  var alphaString = str.replace(/[^0-9a-z]/gi, '');
  
  //Set entire strign to lowercase
  var lowercaseString = alphaString.toLowerCase();
  
  //Create an array of the characters in the string
  var originalStringArray = lowercaseString.split('');
  
  //Reverse the array
  var reversedStringArray = originalStringArray.reverse();
  
  //Rejoin the reversed array
  var newLowercaseString = reversedStringArray.join('');
  
  //Check if the reversed string matches the original string
  if (lowercaseString === newLowercaseString) {
    return true;
  } else {
    return false;
  }
  
}
