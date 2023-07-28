function squareDigits(num){
  let arr = num.toString().split('')
  let squaredArr = arr.map(e => Math.pow(e, 2)).join('')
  return Number(squaredArr)
}

//need to make the number a string first
//then split the string