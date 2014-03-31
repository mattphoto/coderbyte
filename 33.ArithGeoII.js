// 1. When the input was (2,6,18,54) your output was incorrect.
// 2. When the input was (1,2,3,4,5,10,20) your output was incorrect.
// 3. When the input was (100,200,400,800,1600) your output was incorrect.
// 4. When the input was (5,10,20,40,80) your output was incorrect.

function ArithGeoII(arr) {
  var series;
  var dif = arr[1] - arr[0];
  var ratio = arr[1] / arr[0];
  
  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i+1] - arr[i] === dif) {
      series = "Arithmetic" ;
    } else if (arr[i+1] / arr[i] === ratio) {
      series = "Geometic" ;
    } else {
      series = "-1";
    }
    // console.log(arr[i], arr[i+1], dif, ratio, series);   // to see loop step thru the array.
  }
  return series;
}




// superdewd

function ArithGeoII(arr) { 

  var d = arr[1] - arr[0],
      q = arr[1] / arr[0];
  
  var ok = true;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != d) {
      ok = false;
      break;
    }
  }
  
  if (ok) { 
    return 'Arithmetic';
  }
  
  ok = true;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] != q) {
      ok = false;
      break;
    }
  }
  
  if (ok) {
    return 'Geometric';
  }
  
  // code goes here
  return -1; 
            
}