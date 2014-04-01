function LetterChanges(str) {

  function isLetter(l) {
    return (l <= "z" && l >= "a");
  }
  var txt="";
  var n;
  for (var i = 0; i < str.length; i++){
    n = str[i];
    if (isLetter(str[i])){
      n = String.fromCharCode( str[i].charCodeAt(0) + 1);
      if (n === "z") {
        n = "a";
      }

      if (  n === "a" ||
            n === "e" ||
            n === "i" ||
            n === "o" ||
            n === "u" ) {
        n = n.toUpperCase;
      }
    }
    txt += n;
  }
  return txt;

}

// mattlarsh


function LetterChanges(str) { 
  return str.replace(/[a-z]/ig,function(c){
    var next = String.fromCharCode(c.charCodeAt() + 1);
    if(/[aeiou]/g.test(next)){
      next = next.toUpperCase(); 
    }
    return c == 'z' ? 'A' : c == 'Z' ? 'A' : next;
  });    
}



// A.M.
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
