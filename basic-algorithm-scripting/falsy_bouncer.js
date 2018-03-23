function bouncer(arr) {
  //Will hold all filtered values that are not falsy
  var trueArray = [];
  
  //Boolean object will return true for all values that are not false,null,NaN,undefined,0,""
  //Boolean object is buggy, would not recommend use in the future
  trueArray = arr.filter(Boolean);
  
  return trueArray;
}
