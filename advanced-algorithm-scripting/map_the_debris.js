// A function that takes the average altitude of a satellite and calculates the orbital period
function orbitalPeriod(arr) {
// Given constants
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  for (var i = 0; i < arr.length; i++) {
    // Calculate the orbital period 
    var oPeriod = Math.round(2*Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = oPeriod;
  }
  
  return arr;
}
