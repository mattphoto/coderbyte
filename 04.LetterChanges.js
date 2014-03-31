function LetterChanges(str) {

  function isLetter(l) {
    return (l <= "z" && l >= "a");
  }

  var txt="";
  for (var i = 0; i < str.length; i++){
    if (isLetter(n)){
      n = String.fromCharCode( str[i].charCodeAt(0) + 1);
      if (  str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u" ) {
        n = n.toUpperCase;
      }
    }
  }
  return str;

}

// match against an array
// ifstr[i]isIn[aeiou]

function LetterChanges(str) {

 var n = new String();
 var o = new String();
 
 for (var i=0; i < str.length; i++) {
   if ( str[i] != 'z' ) {
     n = n + String.fromCharCode( str[i].charCodeAt()+ 1 );
   } else {
     n = n + 'a'; 
   }
 }
 
 for (i=0; i < n.length; i++) {
   switch(n[i])
   {
   case 'a':
     o += 'A';
     break;
   case 'e':
     o += 'E';
     break;
   case 'i':
     o += 'I';
     break;
   case 'o':
     o += 'O';
     break;        
   case 'u':
     o += 'U';
     break;
      
   default:
     o += n[i];
   }     
 }
 return o;     
}
