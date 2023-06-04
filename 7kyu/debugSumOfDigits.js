function getSumOfDigits(integer) {
  var sum = 0;
  var digits = Math.floor(integer).toString();
  for (var i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  return sum;
}