function updateLight(current) {
  let change = ''
  if(current === 'green'){
    change = 'yellow'
  } else if(current === 'yellow'){
    change = 'red'
  } else {
    change = 'green'
  } 
  return change
}