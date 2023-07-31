let a = 0
let b = 0
let c = 0
for (let i = 1; i < number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    ++c
  } else if (i % 3 === 0) {
    ++a
  } else if (i % 5 === 0) {
    ++b
  }
}
return [a, b, c]


//given an integer
//return an array [a, b, c]
// a is # (count) of multiples BELOW integer
// b is 5
// c 3 and 5 