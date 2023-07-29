function getMinMax(arr){
  let sortedArr = arr.sort((a,b) => a - b)
  return [sortedArr[0], sortedArr[sortedArr.length - 1]]
};

function getMinMax(arr){
  return [Math.min(...arr),Math.max(...arr)];
}