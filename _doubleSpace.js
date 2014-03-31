function checkDoubleSpace(str) {
  for (i=0; i<str.length-1; i++) {
    if(str[i] === " " && str[i+1] === " "){
      return true;
    }
  }
  return false;
}


function SpaceOne(str) {
  if !(checkDoubleSpace(str)) {
    return string;
  } else {
    
  }
    
    
    
}





function oneSpaceOnly(str) {
 var space = false;
 var result = "";
 
 str = str.trim();
 
 for ( var i=0; i < str.length; i += 1 ) {
   if ( str[i] === ' ' )   {
     space = true;
     
   } else {
     if ( space === true ) {
       result +=  ' ';
     }
     
     result += str[i];
     space = false;
   }
   
 }
 return result;
 
}