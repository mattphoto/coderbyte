function WordCount(str){
  return str.split(' ').length;
}

//dewd
function WordCount(str) { 
  str = str.trim();
  
  var cnt = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ' ') cnt++;
  }
  
  // code goes here
  return cnt +1 ; 
            
}