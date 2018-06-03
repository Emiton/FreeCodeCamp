// From two given numbers, sum all of the numbers within the range of these numbers
function sumAll(arr) {
  var total = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++)
  {
    total += i;
  }
  return total;
}

sumAll([1, 4]);
