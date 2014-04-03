// this solution doesn't account for mulitple letters.

function StringScramble(str1,str2) { 

  var match = false;
  var check = false;
  for (var i = 0; i < str2.length; i++) {
    for (var j = 0; j < str1.length; j++) {
      if (str2[i] === str1[j]) {
        check = true;
      }
    }
    if (check === true) {
      match = true;
    } else {
      return false;
    }
  }
  return match;
}






 // marshall

 function StringScramble(str1,str2) { 

  // code goes here  
  var arr1 = str1.split("");
  var arr2 = str2.split("");
  var ret = true;
  for (var x=0;x<arr2.length;x++) {
    if (arr1.indexOf(arr2[x])==-1) {
      ret = false;
    }
  }
  return ret; 
         
}


// mattlarsh

function StringScramble(str1,str2) { 
  var one = str1.split('').sort();
  var two = str2.split('').sort();
  var i = 0;
  var j = 0;
  while(one.length > i && two.length > j){
    if(one[i] === two[j]){
      i++;
      j++;
    }
    else i++;
  }
  if(two.length === j)return true;
  return false;
}