/**
 * This functions accepts a string which contains space separated binary values.
 * The values must be converted into an alphabetical string, which is returned
 * to the client.
 * 
 * 
**/

function binaryAgent(str) {
  // Separate each binary value
  var binaryArray = str.split(" ");

  for(var i = 0; i < binaryArray.length; i++) {
    // Convert binary to decimal
    binaryArray[i] = parseInt(binaryArray[i], 2);
    // Convert decimal to character
    binaryArray[i] = String.fromCharCode(binaryArray[i]);
  }
  
  return binaryArray.join("");
}

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");