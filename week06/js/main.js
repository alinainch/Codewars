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

//#4 The highest profit wins!
function minMax(arr){
  return [Math.min(...arr) , Math.max(...arr)]; // fix me!
}

//#5 Third Angle of a Triangle
function otherAngle(a, b) {
  return 180 - a - b;
}

//#6 Welcome! 
function greet(language) {
	let langObj = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  }
  return langObj[language] || langObj.english 
}


//#7 Determine offspring sex based on genes XX and XY chromosomes 
function chromosomeCheck(sperm) {
  if(sperm === "XX"){
    return "Congratulations! You're going to have a daughter."
  }  else {
    return "Congratulations! You're going to have a son."
  }
 }

 //#8 Chuck Norris VII - True or False? (Beginner)
 function ifChuckSaysSo(){
  return !true 
 } //note to self: first I tried return != true but that didn't work. 

 //#9 Volume of a Cuboid (8kyu)
 class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height 
  }
}

//#10 All Star Code Challenge #18 (8kyu)
function strCount(str, letter){  
  return str.split(letter).length-1
}

//#11 Add Length (8kyu)
function addLength(str) {
  let array = str.split(' ')
  for (let i = 0; i < array.length; i++) {
    array[i] = `${array[i]} ${array[i].length}`
  }
  return array
  }

//easier solution with map vvv from solutions 
let addLength = str => str.split(' ').map(word => `${word} ${word.length}`)

//#12 Sum Mixed Array
function sumMix(x){
  return x.reduce((a, n) => Number(n) + a, 0)
} //a is the accumulator aka the initial value. n is each othe values/indexes in the array 
//a = 0 was set to 0

//a doesnt need to be converted into a number, only n needs to be converted because it can be either 
//a string or a number 

//cleaner solution vvvvvv
function sumMix(x){
  return x.reduce((a, n) => +n + a, 0)
 }

 //#13 Object Oriented Piracy (8 kyu)
 class Ship {
  constructor(draft, crew){
    this.draft = draft;
    this.crew = crew;
  }
  
  isWorthIt(){
    let crewWeight = 1.5 * this.crew 
    let total = this.draft - crewWeight  
    if(total > 20 ){
      return true
    } else {
      return false
    }
  }
}

//better way 
// isWorthIt(){
//   return this.draft - 1.5 * this.crew > 20;
// }
//? true:false

//#"this" is a problem 
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + ' ' + last 
}

//#14 Counting sheep...
function countSheeps(arrayOfSheep) {
  let sheep = 0
  arrayOfSheep.forEach(element => { 
    console.log(element)
    if(element === true){
    sheep++
  }
  })
  return sheep 
} //true is Boolean not string 

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((a, n) => {
    if(n === true){
      return a + 1 
      } else {
        return a 
      }
      } , 0)
 } 
 //first argument is a function which is everything before 0 
 //first function takes two arguments (a,n)
 //second argument is 0 (starting place)

 function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(element => element === true).length;
}
//#15 altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
  let letters = this.split('') //.this accesses string
  let letters2 = letters.map(swap)
  console.log(letters)
  let letters3 = letters2.join('')
  console.log(letters3)
  return letters3
  }
  
  function swap(x){
    if(x === x.toLowerCase()){
      return x.toUpperCase()
    } else if(x === x.toUpperCase()){
      return x.toLowerCase()
    } else {
      return x
    }
  }

//#16 Even of Odd 
const evenOrOdd = (num) => {
  if(num % 2 === 0){
    return 'Even'
  } else {
    return 'Odd'
  }
}

//#17 Convert a Boolean to a String
let booleanToString = b => b.toString()

//#18 Calculate BMI
function bmi(weight, height) {
  let result = weight / (height * height) 
   if(result <= 18.5){
     return 'Underweight'
   } else if(result <= 25.0){
     return 'Normal'
   } else if(result <= 30.0){
     return 'Overweight'
   } else if(result > 30){
     return 'Obese'
   }
 }