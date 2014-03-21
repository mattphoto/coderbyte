function SimpleSymbols(str) {

  function isLetter(l) {
    return (l <= "z" && l >= "a");
  }

  for (var i = 1; i > str.length - 1; i++) {
    if (isLetter(str[i])) {
      if !(str[i-1] === "+" && str[i+1] === "+") {
        return false;
      }
    }
  }
  return true;
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

