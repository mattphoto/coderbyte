// split on regex match for non numbers to return array of 4 numbers
// find the first m then check for a or p, also for second m
// convert hours to 24hr digits
// if pm to am then add 12 to end
// if am to pm then add 12 to end
// if am to am && start > end add 24 to end
// if pm to pm && start > end add 24 to end
// should have split on the hyphen


function CountingMinutesI(str) { 

  var splitTime;
  var startTime;
  var endTime;

  function ampmStart(str) {
    if (str[str.indexOf("m") - 1] === "a") {
      return true;
    }
    return false;
  }

  function ampmEnd(str) {
    if (str[str.lastIndexOf("m") - 1] === "a") {
      return true;
    }
    return false;
  }

  splitTime = str.split(/\D/g).filter(function(n){ return n != '' });
  startTime = parseInt(splitTime[0]) * 60 + parseInt(splitTime[1]);
  endTime = parseInt(splitTime[2]) * 60 + parseInt(splitTime[3]);

  if ((ampmStart(str) && !ampmEnd(str)) || 
      (!ampmStart(str) && ampmEnd(str))) {
    endTime += 720;
  } 

  if (startTime > endTime) {
    if ((ampmStart(str) && ampmEnd(str)) ||
      (!ampmStart(str) && !ampmEnd(str))) {
      endTime += 1440;
    }    
  }
  return endTime - startTime;  
}




// superdewd

function CountingMinutesI(str) { 

  var parse = function (s) {
    var suff = s.substring(s.length - 2);
    s = s.substring(0, s.length - 2);
    var l = parseInt(s.substring(0, s.indexOf(':')), 10),
        r = parseInt(s.substring(s.indexOf(':') + 1), 10);
    return l * 60 + r + (suff == 'pm' ? 12 * 60 : 0);
  };
  
  var a = parse(str.substring(0, str.indexOf('-'))),
      b = parse(str.substring(str.indexOf('-') + 1));
  
  return ((b - a) % (24 * 60) + (24 * 60)) % (24 * 60);
            
}




// hfkiwi

function CountingMinutesI(str) { 
  var times=str.split("-");
  var hours = new Array;
  var minutes = new Array;
  for(t=0;t<=1;t++) {
    hours[t]=times[t].split(":")[0]*1;
    if ((times[t].slice(-2) == "pm") && (hours[t] < 12)) { hours[t]+=12 }
    if ((times[t].slice(-2) == "am") && (hours[t] == 12)) { hours[t]=0 }
    minutes[t]=times[t].slice(-4,-2)*1;
    minutes[t]+=hours[t]*60;
  } 
  if (minutes[1] < minutes[0]) {minutes[1]+=1440};
  return minutes[1]-minutes[0];          
}




// marshall 

function CountingMinutesI(str) { 

  // code goes here
  var t1 = str.split("-")[0];
  var t2 = str.split("-")[1];
  //FIRST TIME
  var time1 = new Array();
  time1["hours"] = parseFloat(t1.split(":")[0]);
  time1["minutes"] = parseFloat(t1.split(":")[1].match(new RegExp("[0-9]+","g"))[0]);
  time1["d"] = t1.split(":")[1].replace(new RegExp("[0-9]","g"),"");
  if (time1["hours"]==12) {
    if (time1["d"]=="am") {
      time1["hours"]=0;
    }
  }
  if (time1["d"]=="pm" && time1["hours"]!=12) {
    time1["hours"]+=12;
  }
  //SECOND TIME
  var time2 = new Array();
  time2["hours"] = parseFloat(t2.split(":")[0]);
  time2["minutes"] = parseFloat(t2.split(":")[1].match(new RegExp("[0-9]+","g"))[0]);
  time2["d"] = t2.split(":")[1].replace(new RegExp("[0-9]","g"),"");
  if (time2["hours"]==12) {
    if (time2["d"]=="am") {
      time2["hours"]=0;
    }
  }
  if (time2["d"]=="pm" && time2["hours"]!=12) {
    time2["hours"]+=12;
  }
  var t1Min = (time1["hours"]*60)+(time1["minutes"]);
  var t2Min = (time2["hours"]*60)+(time2["minutes"]);
  if (t1Min>t2Min) {
    return (24*60)-(t1Min-t2Min);
  } else {
    return t2Min-t1Min
  }
}


// mattlarsh

function CountingMinutesI(str) { 
  var time1 = str.match(/.+(?=-)/g).join("");
  var time2 = str.match(/\d{1,2}:\d\d[ap]m(?!-)/g).join("");
  var hours1 = time1.match(/\d{1,2}(?=:)/g) * 1;
  var hours2 = time2.match(/\d{1,2}(?=:)/g) * 1;
  if(hours1 != 12 && /p/g.test(time1)){
     hours1 += 12; 
  }
  if(hours2 != 12 && /p/g.test(time2)){
     hours2 += 12; 
  }
  if(hours1 == 12 && /a/g.test(time1)){
     hours1 = 0; 
  }
   if(hours2 == 12 && /a/g.test(time2)){
     hours2 = 0; 
  }
  var mins1 = time1.match(/\d\d(?=[ap])/g) * 1;
  var mins2 = time2.match(/\d\d(?=[ap])/g) * 1;
  var totalMins1 = (hours1 * 60) + mins1;
  var totalMins2 = (hours2 * 60) + mins2;
  if(totalMins1 > totalMins2){
    return Math.abs(1440 - (totalMins1 - totalMins2));  
  } else if(totalMins1 < totalMins2){
    return Math.abs((totalMins2 - totalMins1));  
  }
}



// am

function CountingMinutesI(str) { 

 var times = str.split('-');
 var isSame = times[0][times[0].length - 2] === times[1][times[1].length - 2];
 //console.log (isSame);
 
 var first = times[0].split(':');
 var second = times[1].split(':');
 
 first[1] = first[1].slice(0, first[1].length-2);
 second[1] = second[1].slice(0, second[1].length-2);  

 var hdiff;
 var mins;
 
 if (isSame) {
     hdiff = (1*second[0]) - (1*first[0]);
     
 } else {
     hdiff = 12 - (1*first[0]) + (1*second[0]);
 }
 
 
 //console.log(hdiff);
 
 var mdiff;
 
 mdiff = (second[1]*1) - (first[1] * 1) ;
 
 if ( isSame && mdiff < 0) {     hdiff += 24;   }
 
 //console.log(mdiff);  
 
 return ( hdiff * 60) + mdiff; 
 
}