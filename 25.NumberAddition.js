// split string on regex non numeric number to an array;
// sum array;

// learn String.match(regexp) & parseFloat vs. parseInt


function NumberAddition(str) { 
  var sum =0;
  var splitNumbers = str.replace( /[^0-9]/g,  "," ).split(",");
  for (var i = 0; i < splitNumbers.length; i++) {
    if (parseInt(splitNumbers[i]) > 0) {
        sum += parseInt(splitNumbers[i], 10);        
    }
  }
  return sum;     
}




//marshall of sound

function NumberAddition(str) { 

  // code goes here  
  var Arr = str.match(/[0-9]*/g);
  var num = 0;
  for (i=0;i<Arr.length;i++) {
    if (Arr[i]!="") {
      num += parseFloat(Arr[i]);
    }
  }
  return num; 
         
}



// superdewd

function NumberAddition(str) { 

  var isDigit = function (s) { return s.charCodeAt(0) >= '0'.charCodeAt(0) 
                                && s.charCodeAt(0) <= '9'.charCodeAt(0); };
  
  var sum = 0, i = 0;
  while (i < str.length)
  {
    while (i < str.length && !isDigit(str[i])) i++;
    var cur = 0;
    while (i < str.length && isDigit(str[i]))
    {
      cur = cur * 10 + str.charCodeAt(i) - '0'.charCodeAt(0);
      i++;
    }
    
    sum += cur;
  }
  
  // code goes here
  return sum; 
            
}

