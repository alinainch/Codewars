function findAverage(array) {
  if(array.length === 0){
    return 0
  } else{
    let sum = array.reduce((a,n) => a + n, 0)
    let valueFinal = sum / array.length
    return valueFinal
  }
}

//add all with reduce method
// divide by the total amount of numbers (.length)