/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
 var sortBy = function(arr, fn) {
  arr.sort((a, b) => a - b)
  let sortedArr = []
  for(let i = 0; i < arr.length; i++){
      sortedArr.push(arr[i])
  }
  return sortedArr
};


//
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
 var sortBy = function(arr, fn) {
  //sort by the numerical result of the function
  arr.sort((a, b) => fn(a) - fn(b))
  let sortedArr = []
  for(let i = 0; i < arr.length; i++){
      sortedArr.push(arr[i])
  }
  return sortedArr
};