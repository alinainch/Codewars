var lengthOfLastWord = function(s) {
  s = s.trim()
  let arr = s.split(' ')
  let last = arr[arr.length -1]
  return last.length
};

/** Refactored
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let lastWord = s.trim().split(' ')
  return lastWord[lastWord.length -1].length
}

