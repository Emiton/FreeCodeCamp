function repeatStringNumTimes(str, num) {
  
  //Empty string that will be added to or left alone
  var repeatString = "";
  
  //If positive number is input, concatenate the given string 'num' times
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      repeatString += str;
    }
  }
  
  return repeatString;
}
