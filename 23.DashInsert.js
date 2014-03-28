// my solution performs modulus operation on on a string, but still works.

function DashInsert(num) { 
num = num.toString();
dashedNum = "";
  for (var i = 0; i < num.length; i++){
    dashedNum += num[i];
    if (num[i] % 2 !== 0 && num[i+1] % 2 !== 0 && num[i+1] !== undefined) {
      dashedNum += "-";
    }
  }  console.log(num[i], dashedNum);
  return dashedNum;
}



// superDewd's solution

function DashInsert(num) { 
  if (num == '') return '';
  num = num + '';                 // adding a string to a num converts it to string.
  var s = '' + num[0];
  
  for (var i = 1; i < num.length; i++) {
    var l = parseInt(num[i - 1], 10),
        r = parseInt(num[i], 10);
    
    if (l % 2 != 0 && r % 2 != 0) s += '-';
    s += num[i];
  }
  
  // code goes here
  return s; 
            
}