//Add Length (8kyu)
function addLength(str) {
  let array = str.split(' ')
  for (let i = 0; i < array.length; i++) {
    array[i] = `${array[i]} ${array[i].length}`
  }
  return array
  }