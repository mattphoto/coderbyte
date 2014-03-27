function DivisionStringified(num1,num2) {
var commaAdded = "";
var number = Math.floor( num1 / num2 ).toString();
var numberOfcommas = Math.floor(number / 3);
var firstDigits = number % 3;

  for (var i= 0; i < numberOfcommas; i++) {
    commaAdded.concat(number.slice(number.length, 3));
  }

console.log(commaAdded);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());                            















                            
                            
                            
  