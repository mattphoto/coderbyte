function FirstFactorial(num) {
    for (var i = num-1; i > 1; i--) {
      num *= i;
    }
  return num;
}

function FirstFactorial(num) {
    var max = num;
    for (var i = 2; i < max; i++) {
      num *= i;
    }
  return num;
}

function FirstFactorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }
}