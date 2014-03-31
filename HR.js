function palindromeNumber(num) {
  return num.toString() === num.toString().split("").reverse().join("");
}

