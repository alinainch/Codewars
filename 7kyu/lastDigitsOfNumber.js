function lastDigit(n, d) {
  const arr = n.toString().split('').map(e => +e).slice(-d)
   console.log(arr)
   if(d > n.length){
     return n
   } else if(d <= 0){
     return []
   } else{
     return arr
   }
 }
 
 
 //worked with randy and bill 