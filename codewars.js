// Palindromic Numbers

function palindromize(number){
  var count = -1;
  var sum = 0;
  var revNum = 0
  while (revNum !== number) {
    number += revNum;
    revNum = parseInt(number.toString().split('').reverse().join(''));
    console.log(number, revNum);
    count ++;
  }
  return count + " " + number;
}


// alt

function is_palindrome(n){
  return n.toString() == n.toString().split("").reverse().join("");
}

function palindromize(n){
  var ind = 0;
  while (!is_palindrome(n)){
    n = n + parseInt(n.toString().split("").reverse().join(""))
    ind += 1;
  }
  return ind+" "+n;
}


//  palindome number check

 n = num;
 rev = 0;
 while (num > 0)
 {
      dig = num % 10;
      rev = rev * 10 + dig;
      num = num / 10;
 }
If n == rev then num is a palindrome:



///

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




//
Complete the solution so that it returns true if the first argument(string) passed in ends with 
the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false



function solution(str, ending){
  return ending === str.substring(str.lastIndexOf(ending));



// learned substring. and to use lastIndexOf to account for repeating matches.


function solution(str, ending){
  // TODO: complete
  return (new RegExp(ending+"$")).test(str);
}

function solution(str, ending){
  return (str.slice(-ending.length)===ending)
}


//

function searchNames( logins ){
  return logins.filter(function(x) {
    x[0].slice(-1) == "_";
  });
}




// arrray dif


function array_diff(a, b) {
  var result = [];
  var present = false;
  for (var i = 0; i < b.length; i++) {
    for (var j = 0; j < a.length; j++) {
      if (b[i] === a[j]) {
        present = true;
      }
      console.log(b[i], a[j], present);
      if (!present){
      result.push(a[j]);
     }
        present = false;
        console.log(b[i], a[j], present);
    }
    
  }
  return result;
}


function array_diff(a, b) {
  return a.filter(function(x) {return !(b.indexOf(x) > -1);});





function getMissingElement(superImportantArray){
  var missing;
  arr = superImportantArray.sort();
  for (var i = 0; i < arr.length; i++){
    if (i != arr[i]) {
      return i;
    }
  }
}


function getMissingElement(superImportantArray){
  return 45 - superImportantArray.reduce(function(a,b){ return a+b;});
}


function getMissingElement(superImportantArray){
  return [0,1,2,3,4,5,6,7,8,9].filter(function(e){
    return superImportantArray.indexOf(e) == -1;
  })[0];
}


function pluck(objs, name) {
  var results = [];
  
  for (var i = 0; i < objs.length; i++) {
    for (key in objs) {
      if (key === name) {
        results.push(objs[key]);
      }
    }    
  }
  return results;
}


pluck([{a:1}, {a:2}], 'a');





////

//









//

function solution(number){
  var threeFive = [];
  for (var i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      threeFive.push(i);
    }
  }
  console.log(threeFive);
  return threeFive.reduce(function(a, b){
    return a + b;
  }

}



//

function toWeirdCase(str){
  str = str.split(' ');
  result = [];
  for (var i = 0; i < str.length; i++) {
    result.push[toWeird(str[i])];
  }
  return result.join(' ');
}


function toWeird(string){
  string = string.toUpperCase();
  var result = "";
  var letter = '';
  for (var i = 0; i < string.length; i++) {
    console.log(string, i, string[i]);
    if (i % 2) {
      letter = string[i].toLowerCase();
      
    } else {
      letter = string[i];
    }
    result += letter;
  }
  return result;
}

// function toWeirdCase(string){
  return string.toLowerCase().split(' ').map(function(word){
    return word.split('').map(function(char, index){
      return index%2==0 ? char.toUpperCase() : char;
    }).join('')
  }).join(' ');
}



function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    var encoded = "";
    var add = ""
    for (var i = 0; i < str.length; i++) {
      if (abc1.indexOf(str[i]) < 0) {
        add = str[i];
      } else {
        add = abc2.charAt(abc1.indexOf(str[i]));
      }
      encoded += add;
    }
    return encoded;
  };
  this.decode = function (str) {
    var decoded = "";
    var add = "";
    for (var i = 0; i < str.length; i++) {
      if (abc1.indexOf(str[i]) < 0) {
        add = str[i];
      } else {
        add = abc1.charAt(abc2.indexOf(str[i]));
      }
      decoded += add;
    }
    return decoded;
  };
}



function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    return str.split('').map(function(s){return (t=abc1.indexOf(s))==-1?s:abc2[t];}).join('');
  }
  this.decode = function (str) {
    return new SubstitutionCipher(abc2, abc1).encode(str);
  }
}





var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"

sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"




function solution(fullText, searchText){
 
  var count = 0;
  for (var i = 0; i < fullText.length-searchText.length; i++) {
    if (searchText === fullText.slice(i, i+searchText.length)) {
      count++
    }
  }
  return count;
}


function solution(fullText, searchText){
  return fullText.split(searchText).length - 1;
}

// split on the search word and count result splits - 1.






if (nums)  //instead of
if (nums === null)


function numbers() {
  for (var i = 0; i < arguments.length; i++) {
    if(typeof arguments[i] != "number"){
      return false;
    }
  }
  return true;
}

function numbers(){
  return Array.prototype.slice.call(arguments).every(function(i){
    return typeof i == 'number'
  });
}

function numbers() {
  return [].every.call(arguments, function (v) { return typeof v === 'number'; });
}






function reject(array, iterator) {
  return array.filter(function(val){ return !iterator(val) })
}


var isAnagram = function(test, original) {
  var one = originial.split('').sort().join('').toLowerCase();
  var two = test.split('').sort().join('').toLowerCase();  

  if (one.length === two.length) {
    for (var i = 0; i < one.length; i++){
      if (one[i] !== two[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};





function likes(names) {

  var len = names.length-1;

  if (names === []) {
    return "no one likes this";
  }

  if (len === 0) {
    return names[0] + " likes this";
  }

  if (len === 1) {
    return names[0] + " and " + names[1] + " like this";
  }

  if (len === 2) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  }

  if (len > 2) {
    return names[0] + ", " + names[1] + " and " + len - 1 + " others like this";
  }
}

likes(['Alex']);




function range(start, end, step) {
  var begin = 0;
  var increment = 1;
  var result = [];
  
  if (arguments.length === 1) {
    end = start;
  } else {
    begin = start;
  }

  if (typeof step === 'number') {
    increment = step;
  }

  if (step === 0) {
    for (var i = begin; i < end; i += 1) {
      result.push(begin);
    }
    return result;
  }
  
  console.log(start, end, step, begin, end, increment, result);

  for (var i = begin; i < end; i += increment) {
    result.push(i);
  }
  return result;
}

range(0,10,2);


// 



function range(start, end, step) {
  var res = [];

  end = arguments[1] || start;
  start = arguments.length > 1 ? arguments[0] : 0;
  step = arguments[2] != null ? arguments[2] : 1;

  for (var i = start; Math.abs(i) < Math.abs(end); i += (step || 1)) {
    res.push(start);
    start += step;
  }
  return res;
}