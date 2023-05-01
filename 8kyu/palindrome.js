function isPalindrome(x) {
  let rev = x.split('').reverse().join('')
  if(x.toLowerCase() == rev.toLowerCase()){
    return true
  } else {
    return false
  }
}
