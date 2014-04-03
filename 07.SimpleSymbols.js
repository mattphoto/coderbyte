// Using the JavaScript language, have the function SimpleSymbols(str) 
// take the str parameter being passed and determine if it is an acceptable 
// sequence by either returning the string true or false. The str parameter 
// will be composed of + and = symbols with several letters between them 
// (ie. ++d+===+c++==a) and for the string to be true each letter must be 
// surrounded by a + symbol. So the string to the left would be false. 
// The string will not be empty and will have at least one letter.




// this solution does not account for 1 char string or numbers

function SimpleSymbols(str) {

  function isLetter(l) {
    return (l <= "z" && l >= "a");
  }

  for (var i = 1; i < str.length; i++) {
    if (isLetter(str[i])) {
      if (str[i-1] !== "+" || str[i+1] !== "+" || str[0] !== "+") {
        return false;
      }
    }
  }
  return true;
}



// superdewd

function SimpleSymbols(str) { 

  str = str.toLowerCase();
  var ok = true;
  for (var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) >= 'a'.charCodeAt(0) && str.charCodeAt(i) <= 'z'.charCodeAt(0)) {
      ok = ok && i - 1 >= 0 && i + 1 < str.length && str[i-1] == '+' && str[i+1] == '+';
    }
  }
  
  // code goes here
  return ok; 
            
}
   



   

function SimpleSymbols(str) { 
 var p;
 var ch;
 var first = false;
 
 for (var i = 0; i < str.length; i += 1) {
   if ( str[i] === '+' ) {
     first = !first;
     if ( i > 1 && !first && p !== i-2 ) return false;
     p = i;
   }
   
   if ( str[i] >= 'a' && str[i] <= 'z' ) {
     ch = i;
   }
   
 }

 // code goes here  
 return true; 
        
}

