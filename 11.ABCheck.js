/*Using the JavaScript language, have the function ABCheck(str) take the str parameter 
being passed and return the string true if the characters a and b are separated by 
exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in 
true because there is exactly three characters between a and b). Otherwise return the string false.*/

function ABCheck(str) {
  for (i = 0; i < str.length-4; i++) {
    if (str[i] === "a" && str[i+4] === "b") {
      return true;
    }
  }
  return false;
}


// a fancy way


function VowelCount(str) { 
  var vow = "aeiou";
  var arr = str.split('');
  return arr.reduce(function(s, v) {
    return vow.indexOf(v) !== -1 ? s + 1 : s;
  }, 0);    
}