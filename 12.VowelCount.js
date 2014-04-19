function VowelCount(str){
  str = str.toLowerCase();
  var count=0
  for (var i = 0; i < str.length; i++){
    if (  str[i] === "a" ||
          str[i] === "e" ||
          str[i] === "i" ||
          str[i] === "o" ||
          str[i] === "u" ) {
      count++
    }
  }
  return count;
}



// mattlarsh

function VowelCount(str) { 
  var vowels = str.match(/[aeiou]/g);
  return vowels.length;
}


// functional 

function VowelCount(str) { 
  var vow = "aeiou";
  var arr = str.split('');
  return arr.reduce(function(s, v) {
    return vow.indexOf(v) !== -1 ? s + 1 : s;
  }, 0);    
}



function VowelCount(str) { 
  var test = function(s, v) {
    if (vow.indexOf(v) !== -1) {
      return s + 1;
    } else {
      return s;
    }
  }

  var vow = "aeiou";
  var arr = str.split('');
  return arr.reduce(test, 0);    
}
