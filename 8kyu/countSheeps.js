function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(element => element === true).length;
}

function countSheeps(arrayOfSheep) {
  let sheep = 0
  arrayOfSheep.forEach(element => { 
    console.log(element)
    if(element === true){
    sheep++
  }
  })
  return sheep 
}//countSheeps