function destroyer(arr) {
  
  //This loop will filter each argument one by one
  for (var i = 1; i < arguments.length; i++) {
    //Had to set current argument to a variable in order to use it in filter comparison
    //Still unsure why
    var currentArg = arguments[i];
    arr = arr.filter(function(number) {
      return number !== currentArg;
    });
  }
  return arr;
}
