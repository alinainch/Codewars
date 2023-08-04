function solution(a, b){
  if(a.length > b.length){
    return b + a + b
  } else {
    return a + b + a
  }
}

//a + b are strings
//return short + long + short
