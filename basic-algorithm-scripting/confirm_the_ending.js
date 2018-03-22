function confirmEnding(str, target) {
  
  //Get the length of the larget and multiply by one for streamlined use of substr() fcn
  var targetLength = target.length * -1;
  
  //Check if ending of str if equal to target
  if (str.substr(targetLength) === target ) {
      return true;
  } else {
      return false;
      }
}
