function isIsogram(str){
  let obj = {}; 
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]]) { 
        return false;
      }else {
      obj[str[i]] = true; 
      }
    }
    return true; 
}