function maskify(cc) {
  for (let i = 0 ; i < cc.length-4; i++){
    cc = cc.replace(cc[i], "#")
  }
  return cc
}