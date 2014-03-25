function ExOh(str) { 
  var xcount = 0;
  var ocount = 0;
  for (var i = 0; i < str.length; i++ ) {
    if (str[i] === "x") {
      xcount += 1;
    } else if (str[i] === "o") {
      ocount += 1;
    }
  }
  return xcount === ocount;
}