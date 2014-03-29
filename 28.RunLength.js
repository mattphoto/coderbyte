// iterate thru string. compare first char to next char
// if first char = next char increment counter
// when first != next char 

function RunLength(str) { 
  var output = "";
  var currChar = "";
    var count = 1;
  for (var i=0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      currChar = str[i];
      count++;
    } else if (str[i] !== str[i+1]) {
      if (str[i+2] !== str[i+1] || str[i+2] === undefined) {
      output += 1 + str[i];
      } else {
      output += count + currChar ;
      count = 1;
      currChar = "";
      }
    } 
    console.log(i, str[i], count, currChar, output) ;
  }
  return output;
}

RunLength("aaabbbzcccdddeee") ;