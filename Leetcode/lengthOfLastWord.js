var lengthOfLastWord = function(s) {
  s = s.trim()
  let arr = s.split(' ')
  let last = arr[arr.length -1]
  return last.length
};