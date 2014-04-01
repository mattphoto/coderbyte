function palindromeNumber(num) {
  return num.toString() === num.toString().split("").reverse().join("");
}

function exponentiate(base, exponent, callback) {
  var result = base;
  for (var i = 1; i < exponent; i++) {
    callback(result);
    result = result * base;
  }
}

exponentiate(2, 3, palindromeNumber);



stockPicker([13, 47, 23, 4, 33, 50, 25]);
M,T,W,T,F,S,S












function stockPicker (arr) {
  var high;
  var low;
  var dif;
  for (var i = 0; i < arr.length-1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] - arr[j] > dif) {
        dif = arr[i] - arr[j];
        high = arr[j];
        low = arr[i];
      }
    }
  }
  return [high, low]
}



2 days, return 2 days