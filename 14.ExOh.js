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


function ExOh(str) { 
  return str.replace(new RegExp("x","g"),"").length == str.replace(new RegExp("o","g"),"").length;
}



// functional with logic by AM

function ExOh(str) { 
  var arr = str.split('');
  var xo = arr.reduce(function(acc, val){
    return val === 'x' ? acc + 1 : acc - 1;
      }, 0);
  // code goes here  
  return !xo;    
}