function rot13(str) {
  
  //Take the input and break it down into an array of words
  var wordHolder = str.split(' ');
  //This string will hold the input after it is shifted
  var transformedString = "";
  
  //First for loop will take a word in the word array and break it into a character array
  for (var i = 0; i < wordHolder.length; i++) {
    //This will be used to ignore non alphanumeric characters
    var regexp = /[A-Z]/;
    //Create a character array for each word
    var letterHolder = wordHolder[i].split('');
    
    //Second for loop will go through the letter array and shift the characters
    for (var j = 0; j < letterHolder.length; j++) {
      //Test if it is a capital letter, if so --> shift the character
      if (regexp.test(letterHolder[j])) {
        //Get the current char code in order to shift
        var currentChar = letterHolder[j].charCodeAt(0);
        //Use the middle character as a reference point when shifting, see below
        //Code tables may not be consistent, but differences between characters are
        var middleCharacter = "M".charCodeAt(0);
        
        if (currentChar <= middleCharacter) {
          currentChar += 13;
          letterHolder[j] = String.fromCharCode(currentChar);
          
        } else if (currentChar > middleCharacter) {
          currentChar -= 13;
          letterHolder[j] = String.fromCharCode(currentChar);
        } 
      } 
    }
    //Rejoin the letter array to form a word
    wordHolder[i] = letterHolder.join('');
  }
  
  //Rejoin the word array to form a phrase
  transformedString = wordHolder.join(' ');
  
  return transformedString;
}
