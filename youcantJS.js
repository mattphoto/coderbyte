function isNumberEven(i) {
    
    if (i % 2 === 0) {
        return true;
    }
    return false;
    
}

function getFileExtension(i) {
    var x = "";
    for (var j= 0; j < i.length; j++) {
        if (i[j] === "."){
            x = i.slice(j+1);
        }
    }
    if (x === "") {return false;}
    return x;
    
}

// error
function longestString(x) {
    str = x.split(" ");
    console.log(x, str);
    max = 0;

    for (var j = 0; j < str.length; j++) {
        if (max < str[j].length) {
            max = str[j].length;
        }
    }
    return str[max];
}

longestString("You running Given a filename in a string");



function longestString(strArr) {

 var i;
 
 var whichLongest = 0;
 var maxlen = 0
 
 for (i = 0; i < strArr.length; i += 1 ) {
   if ( (typeof strArr[i] === "string") && (strArr[i].length > maxlen )) {
     maxlen = strArr[i].length;
     whichLongest = strArr[i];
   }
 }
 return whichLongest;
}