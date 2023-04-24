let greet = function(name) {
  let fixName = name[0].toUpperCase() + name.substring(1).toLowerCase()
  return `Hello ${fixName}!`
  };