// what the... this should be in medium difficulty if not hard
// can't figure out how to generate ANY combination from array elements.

function ArrayAdditionI(arr) { 
  var max = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
    if (max === sum - max)
  }
  return ;     
}



 function ArrayAdditionI(arr) { 
  arr.sort(function(a,b){return a - b})
  var largest = arr.pop();
  var sum = 0;

  for (var i = 0; i &lt; arr.length; i++){
    sum += arr[i];

    for (var j = 0; j &lt; arr.length; j++){
      if (i != j) {
        sum += arr[j];
        if (sum == largest) {
          return true;
        }
      }
    }

    for (var k = 0; k &lt; arr.length; k++) {
      if (i != k) {
        sum -= arr[k];
        if (sum == largest) {
          return true;
        }
      }
    }

    sum = 0;
  }

  return false;      
}


// not sure why Brian's solution works on test cases

function ArrayAdditionI(arr) { 

  // find largest number
  var largestNumber = 0;
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    if(number > largestNumber) {
      largestNumber = number;
    }
  }
  
  // function to sum array values
  var sum = function(array) {
      var total = 0;
  for (var i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total;
  };
  
  // test combinations
  for (var i = 0; i < arr.length; i++) {
    if(sum(arr.slice(i)) == largestNumber) {
    return true;
  }
    console.log(largestNumber, sum(arr.slice(i)), arr.slice(i));
  }
    
  return false;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI([3, 5, -1, 8, 12]);    