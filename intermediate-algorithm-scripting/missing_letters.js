/**
 * This function takes a string which contains a range of letters.
 * If one of the letters is not in alphabetical order, then function
 * will return the letter which should have come next in the alphabet.
 * If everything is in order, return undefined.
**/

// Solution using character codes
function fearNotLetter(str) {
  // Value of first character can be compared against
  var beginning = str.charCodeAt(0);
  for (var i = 1; i < str.length; i++) {
    // If incorrect letter in sequence, return the letter that should have been in that place
    if (str.charCodeAt(i) != beginning + i) {
      return String.fromCharCode(beginning + i);
    }
  }
  return undefined;
}


// Solution using alpha string
/*
function fearNotLetter(str) {
  // Use an alpha string to compare the order of the letters
  var alpha = "abcdefghijklmnopqrstuvwxyz";

  // Check to make sure the current letter is actually follows the preceding letter alphabetically
  for (var i = 1; i < str.length; i++) {
    // If the current letter was not next, return the letter which should have come next
    if (alpha.indexOf(str[i - 1]) + 1 != alpha.indexOf(str[i])) {
      return alpha[alpha.indexOf(str[i - 1]) + 1];
    }
  }
  return undefined;
}
*/


fearNotLetter("abce");