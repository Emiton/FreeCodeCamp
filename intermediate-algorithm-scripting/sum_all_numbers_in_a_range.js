function sumAll(arr) {
  var maxValue = Math.max(arr[0],arr[1]);
  var minValue = Math.min(arr[0],arr[1]);
  var valueArray = [];
  
  for (var i = minValue; i<= maxValue; i++) {
    valueArray.push(i);   
  }
  
  var totalSum = valueArray.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  });
  
  
  return totalSum;
}

