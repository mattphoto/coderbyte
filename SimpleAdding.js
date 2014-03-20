function SimpleAdding(num) {
  for (var i=num-1; i>0; i--){
    num += i;
  }
  return num;
}

function SimpleAdding(num) {
  var sum = 0;
  for (var i=1; i<=num; i++){
    sum += i;
  }
  return sum;
}

function SimpleAdding(num) {
  if (num === 1){ß
    return 1;
  }
  return num + SimpleAdding(num-1);
}