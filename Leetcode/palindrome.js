/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let checkIfPalindrome = Number(x.toString().split('').reverse().join(''))
  return checkIfPalindrome == x ? true : false
};

// x is a number. Cannot split a number
// convert x to string