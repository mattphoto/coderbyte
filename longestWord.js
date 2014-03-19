function longestWord(str) {
 function isValid(chr) {
    return (( chr >= 'a' && chr <= 'z' ) || (chr === ' ')); 
 }
 
 var i;
 var newStr = "";
 var strArr = [];
 var whichLongest = 0;
 var maxlen = 0;
 
 for (i = 0; i < str.length; i += 1 ) {
   if ( isValid(str[i])) {
       newStr = newStr + str[i];    
   }
 }
 
 strArr = newStr.split(' ');
   

 for (i = 0; i < strArr.length; i += 1 ) {
   if ( strArr[i].length > maxlen ) {
     maxlen = strArr[i].length;
     whichLongest = strArr[i];
   }
 }
   
 return whichLongest;
}

longestWord("fun&!! time");