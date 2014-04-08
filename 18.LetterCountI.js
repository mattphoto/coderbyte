// what a mess

function letterCounter(str){
  var countLetter = 1;
  var maxcount = 0;
  for (var i = 0; i < str.length-1; i++) {
    if (str[i] === str[i+1]) {
      countLetter++;
    }
    maxcount = countLetter;
  }
  if (countLetter === 1) {
    return -1;
  }
  return maxcount;
}


function LetterCountI(str) {
  var sorts = [];
  var strArr = [];
  var sum = 0;
  var marker = 0;
  strArr = str.split(" "); // array split into individual words
  for (var i = 0; i < strArr.length; i++) {
    sorts = strArr[i].split("").sort().join(""); //each word split and sorted
    if (letterCounter(sorts) > sum) {
      sum = letterCounter(sorts);
      marker = i;
    }
  }
  if (sum < 2) {
    return -1
  } else {
    return strArr[marker]; 
  }
}



// mattlarsh

function LetterCountI(str) { 
  var letterMap = {};
  var maxCount = 1;
  var words = str.split(" ");
  var maxWord = words[0];
  for(var i=0,y=words.length;i<y;i++){
    var eachWord = words[i];
    letterMap = {};
    for(var j=0,z=eachWord.length;j<z;j++){
      letterMap[eachWord[j]] = letterMap[eachWord[j]] + 1 || 1;
      if(letterMap[eachWord[j]] > maxCount){
        maxCount = letterMap[eachWord[j]];
        maxWord = eachWord;
      }
    }
  }
  if(maxCount > 1){
    return maxWord; 
  }
  return -1;
}




// superdewd

function LetterCountI(str) { 

  var cnt = function (s) {
    var m = 0;
    for (var i = 0; i < s.length; i++) {
      var c = 0;
      for (var j = 0; j < s.length; j++) {
        if (s[i] == s[j]) {
          c++;
        }
      }
      
      m = Math.max(m, c);
    }
    
    return m;
  };
  
  var ss = str.split(' '),
      mxs = '',
      mxc = 0;
  
  for (var i = 0; i < ss.length; i++) {
    var c = cnt(ss[i]);
    if (c > mxc) {
      mxc = c;
      mxs = ss[i];
    }
  }
  
  // code goes here
  return mxc > 1 ? mxs : -1;
            
}



// 








// AM's code

function LetterCountI(str) { 
  var arr = str.split(' ');
  
  var winner = 0;
  var currentHighest = 0;
  var stats = {};
  var foundRepetition = false;
  
  // Go through each word in the sentence
  for (var i=0; i < arr.length; i += 1) {
     
     // Go through each character in a word
     for (var j=0; j < arr[i].length; j += 1 ) {
       // Make each occurance of a particular letter a key in object; make value 
        //of that key hold the count of letters occurance
       if ( stats[arr[i][j]] === undefined )  {
           stats[arr[i][j]] = 1;
       } else {
           stats[arr[i][j]] += 1;
       }
     }
    
     // Each key in stats is a letter found in the word    
     for ( var key in stats ) {
       if ( stats[key] > 1 ) { foundRepetition = true; }
       if ( stats[key] > currentHighest) {
         currentHighest = stats[key];
         winner = i; 
       }
     }

     stats = {};     // reset for new word
  }

  return foundRepetition ? arr[winner] : -1 ; 
         
}

console.log( LetterCountI("Today, is the greatest day ever!") );

console.log( LetterCountI("Hello apple pie") );

console.log( LetterCountI("No words") );