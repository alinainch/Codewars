function rentalCarCost(d) {
  cost = d * 40
  if(d >= 7){
    cost -= 50
    return cost
  } else if(d >= 3){
    cost -= 20
    return cost
  } else {
  return cost 
  }
}
//