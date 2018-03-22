
function titleCase(str) {
  
  //Create an array by separating words in a sentence
  var sentenceArray = str.split(' ');
  
  //For loop will traverse sentence and modify words one by one
  for(var i = 0; i < sentenceArray.length; i++) {
    
    //Take the current word and turn all letter into lowercase
    var currentWord = sentenceArray[i].toLowerCase();
    
    //Take the lowercase word and turn it into an array
    var wordArray = currentWord.split('');
    
    //Reassign a capital letter to the first character of the word
    wordArray[0] = wordArray[0].toUpperCase();
    
    //Replace old word with capitalized word
    sentenceArray[i] = wordArray.join('');
  }
  
  //Rejoin sentence array into string with spaces
  var myNewString = sentenceArray.join(' ');
  return myNewString;
}
