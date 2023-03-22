//#1 Simple Multiplication
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else{
    return number * 9;
  }
}
//#2 Training JS #5: Basic data types--Object
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
} //dot notation 

function animal(obj){
`This ${ob['color']} ${obj['name']} has ${obj['legs']} legs.`
} //in bracket notation

// const animal = obj => return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
//but dont do this ^ its ugly and a lot of code 

//#3 Grasshopper - Object syntax debug
let rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
    }
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}

// #4 Basic Mathematical Operations
function basicOp(operation, value1, value2)
{ if(operation === "+"){
  return value1 + value2
} else if(operation === "-"){
  return value1 - value2
} else if(operation === "*"){
  return value1 * value2
} else if(operation === "/"){
  return value1/value2
}
}

//hi michael 
//the goat
//round 2 the goats tackle emojis 