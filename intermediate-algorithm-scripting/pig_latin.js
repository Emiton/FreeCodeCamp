/**
 * This function takes a sentence and transforms each word in the sentence 
 * using the rules of pig latin.
 * */
 
function translatePigLatin(str) {
  var wordArray = str.split(" ");
  // push modified words to piggy array
  var piggyArray = [];

  // used to check for vowels
  var vowelString = "aeiou";

  wordArray.forEach(function(word) {
    var firstVowel = -1;
    var i = 0;
    while (firstVowel == -1 && i < word.length) {

      if (vowelString.indexOf(word[i]) != -1) {
        firstVowel = i;
      }
      else {
        i++;
      }
    }

    // If a word starts with a vowel, just add way to the end of it
    if (firstVowel == 0) {
      piggyArray.push(word + "way");
    }
    // other wise move the first set of consonants to the end of the word and add "ay" after it
    else {
      piggyArray.push(word.substring(firstVowel) + word.substring(0, firstVowel) + "ay")
    }
  });
  
  // rejoin modified words into a sentence
  str = piggyArray.join(" ");
  return str;
}

translatePigLatin("consonant");