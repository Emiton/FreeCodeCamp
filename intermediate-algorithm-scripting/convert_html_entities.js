// This function will replace certain characters with thier HTML counterparts
function convertHTML(str) {
//My original one line solution
//   str = str.replace(/&/g, '&amp;')
//   .replace(/>/g, '&gt;')
//   .replace(/"/g, '&quot;')
//   .replace(/'/g, '&apos;')
//   .replace(/</g, '&lt;');

// Solution using hash map. Challenge issued by Cliff
  var basicHashMap = {
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;",
    "<" : "&lt;",
    "&" : "&amp;"
  };
  
  var checkStr = str.split('');
  // Go through each word and check if it matches a value in the hash map
  // Replace with HTML value if it is found in the hash map
  checkStr = checkStr.map(function (word){
    if (basicHashMap.hasOwnProperty(word)) {
      word = basicHashMap[word];
    }
    return word;
  });

  var fixedStr = checkStr.join('');
  return fixedStr;
}
