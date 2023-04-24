function findShort(s){
  let shortie = s.split(' ').sort((a,b) => a.length -b.length)
  return shortie[0].length 
 }