String.prototype.toJadenCase = function () {
  return this.split(' ').map(a => a[0].toUpperCase() + a.slice(1)).join(' ')
}

//take the sentence and make it into an array
//map every word in the sentence and make to uppercase
//add the other part of the word
//join the sentence together 