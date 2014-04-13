// a horrible partially functional solution. look below. 

function RunLength(str) { 
  var output = "";
  var currChar = str[0];
  var count = 1;
  for (var i=0; i < str.length; i++) {
    console.log(i, str[i], count, currChar, output) ;
    if (str[i] === str[i+1]) {
      currChar = str[i];
      count++;
    } else if (str[i] !== str[i+1]) {
        if (str[i+2] !== str[i+1] || str[i+2] === undefined) {
        currChar = str[i];
        output += count + currChar;
        count = 1;

    } else {
      output += count + currChar;
      count = 1;
      currChar = str[i];
      }
    } 
    console.log(i, str[i], count, currChar, output) ;
  }
  return output;
}

RunLength("coolthree") ;




// superDewd

function RunLength(str) { 
  
  var curs = str[0],
      curlen = 1,
      res = '';
  
  for (var i = 1; i < str.length; i++) {
    if (str[i] == curs) {
      curlen++;
    } else {
      res += curlen + curs;
      curs = str[i];
      curlen = 1;
    }
  }
  
  res += curlen + curs;
  
  // code goes here
  return res; 





// marshalll


  function RunLength(str) { 

  // code goes here
  var x = 0;
  var n = 0;
  var nstr = "";
  for (i=0;i<str.length;i++) {
    x=i;
    n=0;
    while (str.substr(x,1)==str.substr(i,1)) {
      n+=1;
      x+=1;
    }
    nstr += n + str.substr(i,1);
    i += n - 1;
  }
  return nstr; 
         
}
   

