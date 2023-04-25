function createPhoneNumber(numbers){
  const first = numbers.slice(0,3).join('')
  const sec = numbers.slice(3,6).join('')
  const third = numbers.slice(6,10).join('')
  let phone = `(${first}) ${sec}-${third}`
  return phone 
} 