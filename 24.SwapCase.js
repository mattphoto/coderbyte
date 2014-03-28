// loop thru string
// if charcode is a-z, subtract 32 then get string for that number
// if charcode is A-Z, add 32 then get string for that number
// build string then return it.

function SwapCase(str) { 
  var toggledString = "";
  for (var i = 0; i < str.length; i++) {
    var toggleCase = "";
    var codeChar = str[i].charCodeAt();
    if ( codeChar > 64 && codeChar < 91) {
      toggleCase = String.fromCharCode(codeChar + 32);
    } else if ( codeChar > 96 && codeChar < 123) {
      toggleCase = String.fromCharCode(codeChar - 32);
    } else {
      toggleCase = str[i];
    }
    toggledString += toggleCase;
  }
  return toggledString;
}


// superdewd

function SwapCase(str) { 

  var res = '', low = str.toLowerCase();
  
  for (var i = 0; i < str.length; i++) {
    if (low.charCodeAt(i) >= 'a'.charCodeAt(0) && low.charCodeAt(i) <= 'z'.charCodeAt(0)) {
      if (str[i] == str[i].toUpperCase()) {
        res += str[i].toLowerCase();
      } else {
        res += str[i].toUpperCase();
      }
    } else {
      res += str[i];
    }
  }
  
  // code goes here
  return res; 
            
}