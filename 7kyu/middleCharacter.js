function getMiddle(s){
  let middle = Math.floor(s.length / 2)
  if(s.length % 2 === 0){
    return(s.slice(middle - 1, middle + 1))
  } else if(s.length % 2 === 1){
    return s[middle]
  }
}