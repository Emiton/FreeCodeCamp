/**
* This function will accept 2 arguments. The first being an array of objects known as the collection.
* The second argument is an object known as the source. The function returns an array of objects. Any 
* object in the collection that is equivalent to the source object is added to the return array.
**/  

function whatIsInAName(collection, source) {
  // Set array as collection, prompt asks user to return new array
  var arr = collection;
  var sourceKeys = Object.keys(source);

  // For each of the source keys, loop through array and remove objects
  // Every object that does not match key-value pair is removed
  for (var i = 0; i < sourceKeys.length; i++) {
    // arr is refined each iteration, next loop will use filtered array
    arr = arr.filter( function (item) {
      return item[ sourceKeys[i] ] == source[ sourceKeys[i] ];
    });
  }
  return arr;
}

// Call the function
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

