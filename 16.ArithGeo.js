function ArithGeo (arr) {
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
// isArithmetic ([1,2,3,4,5,10,15,20]);  // try this with the above console.log



function ArithGeo(arr) {
  function isArithmetic(a, b, x) {
    return ( (b-a) === x );
  }

  function isGeometric(a, b, x) {
    return ( (b/a) === x );
  }  
  
  var ar = arr[1] - arr[0];
  var gm = arr[1] / arr[0];
  

  var allArith = true;
  var allGeom = true;
  
  for ( var i = 1 ; i < arr.length ; i += 1 ) {
     if ( isArithmetic(arr[i-1], arr[i], ar) === false ) { allArith = false; }
     if ( isGeometric(arr[i-1], arr[i], gm) === false ) { allGeom = false; }
    
    
     if ( !allArith && !allGeom ) { return -1; }
  }
 
  
  if ( allArith ) {
    return 'Arithmetic';
  } else {
   return 'Geometric';    
  }
}


function ArithGeo(arr) { 

  // code goes here  
  var dif = new Array();
  var val = "";
  var n = arr.length;
  for (var i=0;i<n-1;i++) {
    dif[i]=arr[i+1]-arr[i];
  }
  //CHECK FOR ARITH
  var arith = true;
  for (var i=0;i<n-2;i++) {
    if (dif[i]==dif[i+1]) {
      //ARITH
    } else {
      arith = false;
    }
  }
  if (arith==false) {
   //CHECK GEO
    var factor = new Array();
    for (var i=0;i<n-2;i++) {
      factor[i] = dif[i+1]/dif[i];
    }
    var geo = true;
    for (var i=0;i<n-3;i++) {
      if (factor[i] !==factor[i+1]) {
      } else {
        geo = false;
      }
    }
    if (geo==false) {
      val = "-1";
    } else {
      val = "Geometric";
    }
  } else {
    val = "Arithmetic";
  }
  return val; 
         
}