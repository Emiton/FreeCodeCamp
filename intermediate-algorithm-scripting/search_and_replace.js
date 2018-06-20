/**
 * This function's arguments are a sentence, a word to search for within the sentence, and a word to
 * replace the word which is being searched for. If the argument 'before' is found, it will be replaced
 * with 'after'.
 **/
 
 function myReplace(str, before, after) {
  var wordArray = str.split(" ");
  var wordIndex = wordArray.indexOf(before);

  if (wordIndex != -1) {
    // Case of the original word must be preserved
    // If before is capitalized, after must also be capitalized
    if (before[0] === before[0].toUpperCase()) {
      wordArray[wordIndex] = after[0].toUpperCase() + after.substring(1);
    }
    // If no capital is found, then keep after as is
    else {
      wordArray[wordIndex] = after;
    }
  } 
  else {
    console.log("Word does not exist within string");
  }

  str = wordArray.join(" ");
  return str;
}