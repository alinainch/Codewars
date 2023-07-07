function capitalizeWord(word) {
  word = Array.from(word)
  let first = word.shift()
  first = first.toUpperCase();
  console.log(first)
  word = word.join("")
  return first + word;
}