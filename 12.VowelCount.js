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