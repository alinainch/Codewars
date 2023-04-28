function toCamelCase(str){
  if(str == ''){
    return str
  } 
  
  let strSplit = str.split(/[_ | -]/g)
  let s = strSplit.map((e, i) => {
    if(i > 0){
    return e[0].toUpperCase() + e.slice(1)
    } else {
      return e 
    }
  }).join('')
  
  //g is global so needs to target everything
  //[ ] holds the conditionals to split by _ | -
  //returns e(the) because it is less than 0. since i>0 after the first word it applies the method 
  console.log(s)
  return s
}

//worked with alum david ney to solve 