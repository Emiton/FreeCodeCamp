function truncateString(str, num) {
  
  //Used to save modified string
  var truncString = "";

  //Check if string is longer than num
  //If it is longer than num then modify the string
  if (str.length > num) {
    
    //If num is less than or equal to 3, add elipsis at the end of truncated string
    if (num <= 3) {
      truncString = str.slice(0,num); 
    } else {
      //If num is greater than 3, reduce truncated strength length by three
      //This is to compensate for the size of the elipsis
      truncString = str.slice(0, num - 3);
    }
    //Add elipsis to modifed string
    truncString += "...";
    
  } else {
    //Do not modify string if num is longer than the string
    truncString = str;
    
  }
  
  return truncString;
}
