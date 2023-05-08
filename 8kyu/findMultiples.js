function findMultiples(integer, limit) {
  let newLim = limit /integer 
  let arr = []
  for(let i = 1; i <= newLim; i++){
      let sum = integer * i
      arr.push(sum)
    }
  return arr
}

//find multiples so 25/5 = 5 that is the new limit and would be the max amount of time
//make a new array to push into

function findMultiples(integer, limit) {
  let arr = []
  for(let i = integer; i <= limit; i++){
    if(i % integer === 0){
      arr.push(i)
    }
  }
  return arr
}