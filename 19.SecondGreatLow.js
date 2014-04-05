// didn't account for two element arr with same number

function SecondGreatLow(arr) { 
  arr = arr.sort(function (a, b) {return a - b;});
  var lowIndex = 0;
  var highIndex = arr.length-1;

  for (var i = arr.length-1; i > 1; i--) {
    if (arr[i] !== arr[i-1]) {break;}
    if (arr[i] === arr[i-1] && arr[i] !== arr[i-2]) {
      highIndex = i-1;
      break;
     }
  }

  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i] !== arr[i+1]) {break;}
    if (arr[i] === arr[i+1] && arr[i] !== arr[i+2]) {
      lowIndex = i+1;
      break;
    }
  }

  return arr[lowIndex+1] + " " + arr[highIndex-1];       
}



// SECOND ATTEMPT the first attempt tried to preserve the original arr
// consider destructive operations on inputs if the returned values
// do not need the original input, i.e., when returning a boolean

function SecondGreatLow(arr) { 
  arr = arr.sort(function (a, b) {return a - b;});

  if (arr.length < 3) {
    return arr[1] + " " + arr[0];
  }

  result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]) {
      result.push(arr[i]);
    }
  }
  return result[1] + " " + result[result.length - 2];
}




// marshall

function SecondGreatLow(arr) { 

  var newArr = arr.sort(function(a,b){return a - b});
  var newArr2 = newArr.filter(function(elem, pos, self) {
    return self.indexOf(elem) == pos;
})
  if (newArr2.length<3) {
    return newArr2[1] + " " + newArr2[0];
  } else {
    return newArr2[1] + " " + newArr2[newArr2.length-2];
  }
  //return arr; 
         
}



// hfkiwi

function SecondGreatLow(arr) { 

  // code goes here  
  var sortedunique = arr.sort(function(a,b) { return(a-b) });
  for (i=1;i<sortedunique.length;i++) {
    if (sortedunique[i] == sortedunique[i-1]) { sortedunique.splice(i--,1) }
  }
  return sortedunique[1] + " " + sortedunique[sortedunique.length-2]; 
        
}



// mattlarsh

function SecondGreatLow(arr) { 
  var unique = arr.join(' ').match(/(\b\d+\b)(?!.+\b\1\b)/g); 
  unique.sort(function(a,b){return a-b});
  if(unique.length == 1){
    return unique[0] + ' ' + unique[0]; 
  }
  return unique[1] + ' ' + unique[unique.length -2];
}