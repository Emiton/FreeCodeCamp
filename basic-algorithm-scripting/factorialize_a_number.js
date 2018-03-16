
function factorialize(num) {
  var n = 1;
  // Using for loop, multiplication will start by multiplying 1 X 1
  //The loop will continue to multiply until it is n X num
  for (var i = 1; i <= num; i++) {
    n *= i;
  }
  return n;
}
