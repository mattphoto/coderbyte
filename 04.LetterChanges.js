function LetterChanges(str) {

  function isLetter(l) {
    return (l <= "z" && l >= "a");
  }

  function nextLetter(n) {
    if (isLetter(n)){
      n = String.fromCharCode(n.charCodeAt(0) + 1);
    }
    return n;
  }

  for (var i = 0; i < str.length; i++){
    nextLetter(str[i]);
    if (  str[i] === "a" ||
          str[i] === "e" ||
          str[i] === "i" ||
          str[i] === "o" ||
          str[i] === "u" ) {
      str[i] = str[i].toUpperCase; // same problem where string methods can be applied.
    }
  }
  return str;

}



// match against an array
// (a, e, i, o, u)