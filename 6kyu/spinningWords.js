function spinWords(string){
  let arr = string.split(' ')
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length >= 5){
      arr[i] = arr[i].split('').reverse().join('');
    }
  }
  return arr.join(' ')
}

//return a string
//if length of a word >= 5 reverse
//arr is an array of strings, need to split and reverse the string inside the array 
