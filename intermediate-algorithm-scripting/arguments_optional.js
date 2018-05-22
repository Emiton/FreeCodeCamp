// Function will add two arguments or return a function if only one argument is supplied
function addTogether(x,y) {
  if(arguments.length == 2) {
    
    if ( typeof(arguments[0]) != "number" || typeof(arguments[1]) != "number") {
      return undefined;
    }
    else {
      return arguments[0] + arguments[1];
    }
  }
  else if (arguments.length == 1) {
    if (typeof(arguments[0]) == "number") {
      return function gimmeAnother(z) {
        if (typeof(z) == "number") {
          return x + z;
        }
        else {
          return undefined;
        }
      };
    }
  }  
}
