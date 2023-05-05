function getCount(str) {
  let count = 0
  const vow = ['a', 'e', 'i', 'o', 'u']
  for(let i=0; i < str.length; i++){
    if(vow.includes(str[i])){
      count++
    }
  }
  return count 
}


//The includes() method should be called on the string itself and not on individual characters.
