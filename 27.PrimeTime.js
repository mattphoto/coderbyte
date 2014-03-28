function PrimeTime(num) { 
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}



// superdewd

function PrimeTime(num) { 
  var n = parseInt(num, 10);
  
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  if (n < 25) return true;
  
  var s = Math.floor(Math.sqrt(n));
  for (var i = 5; i <= s; i += 6) {
    if (n % i == 0) return false;
    if (n % (i + 2) == 0) return false;
  }
  
  // code goes here
  return true; 
            
}


// marshall

function PrimeTime(num) { 

  // code goes here
  var prime = true
  var t = 0;
  var n = num;
  for (x=2;x<Math.round(Math.sqrt(n)+0.5);x++) {
    t = n/x
      if (t==Math.round(t)) {
        prime = false;
      }
  }
  return prime; 
         
}