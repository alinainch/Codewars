function array(string) {
  let cs = string.split(',').slice(1,-1).join(' ')
  if(cs === ''){
    return null
  } else if(string === ''){   
    return null
  } else {
    return cs
  } 
}