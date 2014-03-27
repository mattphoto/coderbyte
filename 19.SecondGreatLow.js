arr = [7, 106, 7, 12, 98];

function SecondGreatLow(arr) { 
  arr = arr.sort(function (a, b) {return a - b;});
  var lowIndex = 0;
  var highIndex = arr.length;

  for (var i = 0; i < highIndex; i++) {
    if (arr[i] === arr[i+1] && arr[i] !== arr[i+2]) {
      lowIndex = i+1;
    }
    console.log(i, arr[i], lowIndex);
  }

  for (var i = arr.length-1; i > 1; i--) {
    if (arr[i] === arr[i-1] && arr[i] !== arr[i-2]) {
      highIndex = i-1;
    }
        console.log(i, arr[i], highIndex);
  }

  return arr[highIndex-1] + " " + arr[lowIndex+1]; 
         
}

SecondGreatLow(arr);

   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());                            
