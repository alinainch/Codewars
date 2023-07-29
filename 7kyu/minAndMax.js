function getMinMax(arr){
  let sortedArr = arr.sort((a,b) => a - b)
  return [sortedArr[0], sortedArr[sortedArr.length - 1]]
};