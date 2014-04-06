function range(start, end, step) {
  var begin = 0;
  var result = [];
  
  if (arguments.length === 1) {
    end = start;
  } else {
    begin = start;
  }
  
  for (var i = begin; i < end; i =+ step) {
    result.push(i);
  }
  return result;
}



function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
4 similar code variations are grouped with this oneShow Variations

7LinkCompare with your solution
31ztbrown

function squareSum(numbers){
  return (numbers.length > 0) ? Math.pow(numbers.pop(), 2) + squareSum(numbers) : 0;  
}
2LinkCompare with your solution
21swebob

function squareSum(numbers) {
  return numbers.map(function(a) {
    return a * a;
  }).reduce(function(a, b) {
    return a + b;
  });
}
0LinkCompare with your solution
10ryanlbrown, RWJKM, yuanchuan, zezutom, mrjoelkemp, mizzack (plus 16 more warriors)

function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
}