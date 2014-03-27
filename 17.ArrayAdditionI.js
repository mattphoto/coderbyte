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