function makeNegative(num) {
  if(num < 0){
    return num
  } else if(num === 0){
    return num
  } else{
    return num * -1
  }
}

//other solutions
makeNegative = n => -Math.abs(n)

/////////////////////////////////
function makeNegative(num) {
  return num < 0 ? num : -num;
}