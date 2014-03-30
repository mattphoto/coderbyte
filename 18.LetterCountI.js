                          





str = "Drivers who have experienced this test have seen a tremendous rise";

console.log(strArr);


//


function LetterCountI(str) { 

  var splits;
  var sorts = [];
  var strArr = [];
    strArr = str.toLowerCase().split(" "); // array split into individual words
      for (var i = 0; i < strArr.length; i++) {
          sorts = (strArr[i].split("").sort()); //each word split and sorted
          for (var i = 0; i < sorts.length; i++) {
            console.log(letterCounter(sorts);
          }

          
      }
  return str; 
  
}

LetterCountI(str);

//


function letterCounter(str){
  var countLetter = 1;
  var maxcountLetter = 0;
  for (var i = 0; i < str.length-1; i++) {
    if (str[i] === str [i+1]) {
      countLetter++;
    }
    maxcount = countLetter;
  }
  if (countLetter === 1) {
    return -1;
  }
  return maxcount;
}





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
       // Make each occurance of a particular letter a key in object; make value of that key hold the count of letters occurance
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