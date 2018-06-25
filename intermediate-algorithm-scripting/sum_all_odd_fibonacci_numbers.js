/**
 * This function takes an integer as input. The function will find all fibonacci numbers up to and 
 * including the input and will sum the odd fibonacci numbers. The total sum of these values will
 * be returned.
**/


function sumFibs(num) {
  var num1 = 1;
  var num2 = 1;
  var oddFibs = 0;
  console.log(num);
  var underInput = true;
  
  while (underInput) {
    if (num1 > num) 
    {
      break;
    }
    if (num1 % 2 != 0) {
      oddFibs += num1;
    }

    num1 += num2;

    if (num2 > num) 
    {
      break;
    }
    if (num2 % 2 != 0) {
      oddFibs += num2;
      
    }

    num2 += num1;
  }
  return oddFibs;
}

sumFibs(14);