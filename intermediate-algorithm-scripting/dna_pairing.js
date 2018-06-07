/**
* This function accepts a string in which each letter represents a strand of DNA
* The DNA strands are matched with a corresponding strand
* The given strand and corresposning strand are stored in a 'pair array' of size 2
* Coresponding pairs can be found in the hash map
* Return an aray holding all of the pair arrays
*/

function pairElement(str) {
  // Holds arrays containing DNA pairs
  var pairArray = []
  // Basic hash map used to pair DNA strands 
  var DNApairs = {
    "A" : "T",
    "T" : "A",
    "G" : "C",
    "C" : "G",
  }

  // For every strand in given string, create an array of size 2
  // Insert given DNA strand in first spot
  // Insert mathing DNA strand in second spot using 'DNApairs" hash map 
  for (var i = 0; i < str.length; i++) {
    pairArray[i] = [ str[i] , DNApairs[ str[i] ] ];
  }
  return pairArray;
}

pairElement("GCG");
