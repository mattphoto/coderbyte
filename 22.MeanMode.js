function MeanMode(arr) { 
  var sum = 0;
  var mode = {};
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    mode[arr[i]] = mode[arr[i]] || 0;
    mode[arr[i]] += 1;
  }
  for (key in mode) {
    if (count < mode[key]) {
      count = mode[key];
      modeNum = parseInt(key);
    }
    console.log(key, count, modeNum, sum, mode);
  }
    return modeNum === sum/arr.length;
}



/// leana should return 1 or 0

function MeanMode(arr) {
  var modeCount = {};                //object to hold numbers and their counts
  var mode;                          //creating a variable for future mode
  var mean;     
  var                     //creating a variable for future mean
  var sum = 0;                       //initialzing a sum count

  for ( var i = 0; i < arr.length; i++ ) { //cycling through the array of numbers
    sum += arr[i];                   //adding numbers together for the full sum
    modeCount[arr[i]] = modeCount[arr[i]] || 0;  //we've seen the number before
    modeCount[arr[i]] += 1;          //adding for the count of the number
  }
  mean = sum/arr.length;             //calculating the mean value
  for( var key in modeCount ){       //looping through the modeCount
    if( modeCount[key] > count){     //check the number of times a number has been seen
      mode = parseInt(key);          //if its a new highest, 
      count = modeCount[key];        //set a new high count
    }
  }
  return mode === mean;              //check to see if the mode and mean are equal
}



// marshall

function MeanMode(arr) { 

  // code goes here  
  var mean=0;
  var sum=0;
  var n = arr.length;
  for (var i=0;i<n;i++) {
    sum+=arr[i];
  }
  
  mean = sum/n;
  var array = arr;
  if(array.length == 0) {
      return null;
  }
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
      var el = array[i];
      if(modeMap[el] == null)
        modeMap[el] = 1;
      else
        modeMap[el]++;  
      if(modeMap[el] > maxCount)
      {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    var mode = maxEl;
  if (mode==mean) {
    return 1;
  } else {
    return 0;
  }
}





// marlanga

function MeanMode(arr) { 
  var sum=0, mean=0, mode={};
  var max=0, maxi;
  for (var i=0;i<arr.length;i++)
  {
    sum+=arr[i];
    if (mode["k"+arr[i]]) mode["k"+arr[i]]++;
    else mode["k"+arr[i]]=1;
    if (mode["k"+arr[i]]>max)
    {
        max=mode["k"+arr[i]];
        maxi=arr[i];
    }
  }
  if (sum/arr.length==maxi) return 1;
  return 0;
}
 

