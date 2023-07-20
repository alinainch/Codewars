function isIsogram(str){
  let newStr = str.toLowerCase().split('')
  for(let i = 0; i < newStr.length; i++){
    for(let j = i + 1; j < newStr.length; j++){
      if(newStr[i] === newStr[j]){
        return false
      }
    }
  }
  return true 
}

//j = 0 would compare the character at newStr[i] with itself (false positive)
//j = i + 1 skips the comparison with the same character