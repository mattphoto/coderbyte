// too easy for 'medium'

function Consecutive(arr) { 
  var ary = arr.sort(function(x,y){return x-y});
  var dif = ary[ary.length-1] - ary[0] + 1; 
  return dif - ary.length;  
}