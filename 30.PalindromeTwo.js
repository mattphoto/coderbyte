function PalindromeTwo(str) { 
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



// superdewd

function PalindromeTwo(str) { 

  str = str.toLowerCase();
  
  var ok = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      s = '';
  
  for (var i = 0; i < str.length; i++) {
    if (ok.indexOf(str[i]) >= 0) {
      s += str[i];
    }
  }
  
  for (var i = 0; i < s.length; i++) {
    if (s[i] != s[s.length - i - 1]) {
      return false;
    }
  }
  
  // code goes here
  return true; 
            
}