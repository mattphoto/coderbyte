function ThirdGreatest(strArr) { 
  strArr.sort(function(a, b){return b.length - a.length;});
  return strArr[2];    
}



// hfkiwi

function ThirdGreatest(strArr) { 

  // code goes here  
  var wordlengths = new Array;
  var maxlength = 0;
  for (i=0;i<strArr.length;i++) { 
    wordlengths[i] = strArr[i].length;
    if (wordlengths[i] > maxlength) {maxlength = wordlengths[i]}
  }
  var numfound = 0;
  for (i=maxlength;(i>=0) && (numfound != 3);i--) {
    for (w=0;w<wordlengths.length;w++) {
      if (wordlengths[w]==i) {
        numfound++;
        if (numfound == 3) {break}
      }
    }
  }
  return strArr[w]; 
         
}


// ozkan

function ThirdGreatest(strArr) { 

  var lengths = [];
  for (var i in strArr) {
    lengths.push(strArr[i].length);
  }
  
  var target = lengths.sort()[strArr.length-3];
  
  for (i in strArr) {
    if (strArr[i].length === target) {
      var res = strArr[i];
    }
  }
  
  return res; 