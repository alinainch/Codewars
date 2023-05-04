function digitize(n) {
  const rev = n.toString().split('').reverse()
  const revArr = rev.map(rev => +rev)
  return revArr
}