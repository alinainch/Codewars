function descendingOrder(n){
  let str = String(n)
  let nsplit = str.split('')
  //sort each number by descending
  let sort = nsplit.sort((a,b) => b - a)
  let result = parseInt(sort.join(''))
  return result 
}
  //make n a string so we can split it
  //sort by descending order
  //make the string a number and join it