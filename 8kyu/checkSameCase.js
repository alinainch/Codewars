function sameCase(a, b){
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz'
  if(!letters.includes(a) || !letters.includes(b)){
    return -1
  } else if(a == a.toUpperCase() && b == b.toUpperCase() ||a == a.toLowerCase() && b == b.toLowerCase()){
    return 1
  } else if(a == a.toUpperCase() && b == b.toLowerCase() ||a == a.toLowerCase() && b == b.toUpperCase()){
    return 0
  } 
 }