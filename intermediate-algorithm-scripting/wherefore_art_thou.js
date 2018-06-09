/**
* This function will accept 2 arguments. The first being an array of objects known as the collection.
* The second argument is an object known as the source. The function returns an array of objects. Any 
* object in the collection that is equivalent to the source object is added to the return array.
**/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  var sourceKeys = Object.keys(source);
  
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    console.log("KEY: " + key);
    arr = collection.filter( function (item) {
      console.log("ITEM IS: " + item);
      console.log("ITEM VALUE IS: " + item.key);
      return item.key == source.key;
    });

  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
