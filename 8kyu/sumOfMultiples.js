function sumMul(n,m){
  if (n >= m){
    return "INVALID"
} 

  let sum = 0;
  for(let i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}

// the count (i) starts at the number n 
// run while i is < m
//In each iteration, i is incremented by n, which means we are progressing through multiples of n
// sumMul(3, 13), the loop will start with i = 3, then i will be incremented to 6, 9, and 12. Since the loop condition is i < 13, the loop will stop before i becomes 13, and the function will return 3 + 6 + 9 + 12 = 30, which is the sum of all multiples of 3 below 13.