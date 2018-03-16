
function reverseString(str) {
  //Break down the string into an array of characters
  var tempArray = str.split('');
  //Reverse the array
  tempArray.reverse();
  //Rejoin reversed array into a string
  str = tempArray.join('');
  
  
  return str;
}
