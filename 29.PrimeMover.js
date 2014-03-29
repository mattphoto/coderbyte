//  does not work when num === 1

function PrimeMover(num) { 

  function isPrime(n) { 
    for (var i = 2; i < Math.round(Math.sqrt(n)+0.5); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  var counter = 0;
  for (var i=2; i < num * num; i++) {
    if (isPrime(i)) {
      counter++;
    }
    if (num === counter) {
      return i;
    }
  }
}



// superdewd
`
function PrimeMover(num) { 

  var n = Math.pow(10, 4) + 100,
      arr = [],
      primes = [];
  
  for (var i = 0; i < n; i++) {
    arr.push(true);
  }
  
  for (var j = 2; j < n; j++) {
    if (arr[j]) {
      primes.push(j);
      
      for (var k = j * j; k < n; k += j) {
        arr[k] = false;
      }
    }
  }
  
  // code goes here
  return primes[num - 1]; 
            
}


// mattlarsh

function PrimeMover(num) { 
  var z = 2;
  var result = [2];
  for(var i=2;i<10000;i++){
    z++;
    for(var j=2;j<z;j++){
      if(z%j==0){
        j += 10000; 
      } else if(j==(z-1)){
          result.push(z); 
      }
    }
  }
  return result[num-1];
}