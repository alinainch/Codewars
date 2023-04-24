String.prototype.toAlternatingCase = function () {
  let letters = this.split('') //.this accesses string
  let letters2 = letters.map(swap)
  console.log(letters)
  let letters3 = letters2.join('')
  console.log(letters3)
  return letters3
  }
  
  function swap(x){
    if(x === x.toLowerCase()){
      return x.toUpperCase()
    } else if(x === x.toUpperCase()){
      return x.toLowerCase()
    } else {
      return x
    }
  }