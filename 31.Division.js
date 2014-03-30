// 1. put factors into arrays and compare? <--
// 2. iterate thru to higher number until factor is greater than smaller num. or compare both num
//  nested if statements to compare high to iterator


function Division(num1,num2) { 
  var arr1 = [];
  var arr2 = [];
  
  for (var i = 0; i <= num1; i++) {
    if (num1 % i === 0 ) {
      arr1.push(i);
    }
  }

  for (var j = 0; j <= num2; j++) {
    if (num2 % j === 0 ) {
      arr2.push(j);
    }
  }

  arr1 = arr1.sort(function(a, b) {return b - a;});
  arr2 = arr2.sort(function(a, b) {return b - a;});

  for (var k = 0; k < arr1.length; k++) {
      for (var l = 0; l < arr2.length; l++) {
          if (arr1[k] === arr2[l]) {
              return arr1[k];
          }
      }
  }
}
