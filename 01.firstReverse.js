
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