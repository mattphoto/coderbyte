function DashInsert(num) { 
num = num.toString();
dashedNum = "";
  for (var i = 0; i < num.length; i++){
    dashedNum += num[i];
    if (num[i] % 2 !== 0 && num[i+1] % 2 !== 0) {
      dashedNum += "-";
    }
  }  console.log(num[i], dashedNum);
  return dashedNum;
}