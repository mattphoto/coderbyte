
function FirstReverse(str) {
  return str.split("").reverse().join("");
}


///

function FirstReverse(str) {
  var reversedStr;
  for(var i=0; i<str.length; i++){
    reversedStr.unshift(str[i]);
  }
  return reversedStr;
}


// superdewd

function FirstReverse(str) { 

  var r = '';
  for (var i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  
  // code goes here
  return r; 
            
}