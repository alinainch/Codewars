String.prototype.toJadenCase = function () {
  return this.split(' ').map(a => a[0].toUpperCase() + a.slice(1)).join(' ')
}