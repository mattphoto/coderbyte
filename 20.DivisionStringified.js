function DivisionStringified(num1,num2) {
var number = Math.floor( num1 / num2 ).toString().split("");
var commaAdded = [];

  for (var i= number.length-1; i >= 0; i--) {
    console.log(i, commaAdded.length % 4, commaAdded.join(""));
    if (commaAdded.length % 4 === 0 ){
      commaAdded.unshift(",");
    }
    commaAdded.unshift(number[i]);

    console.log(i, commaAdded.length, commaAdded.join(""));
  }
  return commaAdded.join("");
}
   
DivisionStringified(123, 1); 





function DivisionStringified(num1,num2) {
var number = Math.floor( num1 / num2 ).toString().split("");
var commaAdded = [];

  for (var i= number.length-1; i >= 0; i--) {
    console.log(i, commaAdded.length, commaAdded.length % 4, commaAdded.join(""));
    if (commaAdded.length % 4 === 0 && commaAdded.length !== 0){
      commaAdded.unshift(",");
    }
    commaAdded.unshift(number[i]);

    console.log(i, commaAdded.length, commaAdded.join(""));
  }
  return commaAdded.join("");
}
   
DivisionStringified(1234, 1); 






function addComma(str) {
  var arr = str.split('');
  var arr2 = [];
  var result;
  
  var i = arr.length - 1 ;
  
  while ( i >= 0 ) {
    arr2.unshift(arr[i]);
    

    if ( ((arr.length-1)-i) % 3 === 2 ) {
      arr2.unshift(',');
    }
    
    if ( ( (arr.length-1)-i % 3 ) === 0 ) {
      //console.log("asdfas");
    }
      
    i -= 1;
  }
  
  
  if ( arr2[0] === ',') { arr2.shift(); }   
  
  result = arr2.join('');
  
  return result;
 
}

console.log( addComma('12345678') );