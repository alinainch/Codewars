function highAndLow(numbers){
  let arr = numbers.split(' ')
  let newArr = arr.sort((a,b) => a - b)
  return `${newArr[newArr.length-1]} ${newArr[0]}`
}