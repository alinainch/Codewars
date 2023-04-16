function abbrevName(name){
  let nameSplit = name.split(' ')
  return newName = `${nameSplit[0].charAt(0).toUpperCase()}.${nameSplit[1].charAt(0).toUpperCase()}`
}