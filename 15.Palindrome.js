function Palindrome(str) { 
  str = str.toLowerCase();
  
  function isLetter(l) {
      return (l <= "z" && l >= "a");
  }

  var charsOnlyStr = "";

  for (var i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
    charsOnlyStr += str[i];
    }
  }

  return charsOnlyStr === charsOnlyStr.split("").reverse().join(""); 
}




function Palindrome(str) { 

  // code goes here
  str = str.replace(new RegExp("[^a-z]","g"),"");
  return str==str.split("").reverse().join(""); 
         
}