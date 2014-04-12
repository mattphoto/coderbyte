
function DivisionStringified(num1,num2) {
var number = Math.round( num1 / num2 ).toString().split("");
var commaAdded = [];

  for (var i= number.length-1; i >= 0; i--) {
    if (commaAdded.length % 4 === 0 ){
      commaAdded.unshift(",");
    }
    commaAdded.unshift(number[i]);

    console.log(i, commaAdded.length, commaAdded.join(""));
  }
  return commaAdded.join("").slice(0, -1); //ugly solution to the extra comma
}





// SUPERdewd

function DivisionStringified(num1,num2) { 

  var s = Math.round(num1 / num2) + '',
      res = '';
  
  for (var i = s.length - 1; i >= 0; i--) {
    if (i != s.length - 1 && (s.length - i - 1) % 3 == 0) {
      res = ',' + res;
    }
    
    res = s[i] + res;
  }
  
  return res; 



/// MarshallOfSound

function DivisionStringified(num1,num2) { 
  return (Math.round(num1/num2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");    
}




/// AM

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