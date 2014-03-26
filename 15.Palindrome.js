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


function Palindrome(str) { 
  str = str.toLowerCase();
  var tmp = str;
  str = '';
  for (var i  = 0; i < tmp.length; i++) {
    if (tmp[i] != ' ') {
      str += tmp[i];
    }
  }
  
  var rev = '';
  for (var i = 0; i < str.length; i++) {
    rev += str[str.length - i - 1];
  }
  
  // code goes here
  return str == rev; 
            
}