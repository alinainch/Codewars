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

 // other way to code it cleaner
 function bmi(w, h){
  let b = w / (h*h)
  return b <= 18.5 ? 'Underweight' : b <= 25.0 ? 'Normal' : b <= 30.0 ? 'Overweight' : 'Obese'
 }

 //#19 My head is at the wrong end!
 function fixTheMeerkat(arr) {
  return arr.reverse()
 }

 //better arrow function
 let fixTheMeerkat = x => x.reverse()

 //#20 Friend of Foe? 7kyu
 function friend(friends){
  return friends.filter(x => x.length === 4)
}

//easier solution
 const friend = friendsArr => friendsArr.filter(friend => friend.length === 4)

//#21 Contamination #1-String-
function contamination(text, char){
  let emptyStr = ''
  for(let i = 0; i < text.length; i++){
    emptyStr += char 
 } 
  return emptyStr
}

//#22 Convert a string to a new array
function stringToArray(string){
  return string.split(' ')
}

//#23 Sort array by string length 
function sortByLength (array) {
  return array.sort((x,y) => x.length - y.length)
};

//#24 Conver a numer to a string
function numberToString(num) {
  return num.toString()
}

//better solution
let numberToString = num => num.toString()

//#25 Removing elements 8kyu
function removeEveryOther(arr){
  return arr.filter((e,i) => i % 2 === 0)
 }

//#26 You only need one - Beginner 
function check(a, x) {
  return a.includes(x)
}

//better solution
const check = (a,x) => a.includes(x)

//#27 Are you playing banjo?
function areYouPlayingBanjo(name) {
  if(name.charAt(0) === 'R' || name.charAt(0) === 'r'){
    return name + ' plays banjo'
  } else {
    return name + ' does not play banjo'
  }
}

//could also use name[0] instead of the charAt 

//#28 List filtering 7kyu 
function filter_list(l) {
  return l.filter(e => typeof e === 'number')
}

//#29 Sum Array 8kyu
// Sum Numbers
function sum (numbers) {
  return numbers.reduce((a,n) => a + n, 0)
};

//with arrow function
const sum = numbers => numbers.reduce((a,n) => a + n, 0)

//#30 Calculating average 8kyu
function findAverage(array) {
  if(array.length === 0){
    return 0
  } else{
    let sum = array.reduce((a,n) => a + n, 0)
    let valueFinal = sum / array.length
    return valueFinal
  }
}

//add all with reduce method
// divide by the total amount of numbers (.length)

//#31 Reduce but Grow
function grow(x){
  return x.reduce((a,n) => a * n, 1)
}

// better
const grow = x => x.reduce((a, n) => a * n, 1)

//#32 Function 2 - squaring an argument
const square = n1 => n1 * n1
//could also do const square = n => n ** 2

//#33 Find Maximum and Minimum Values of a List
const min = list => Math.min(...list)
const max = list => Math.max(...list)

// before the arrow
// const min = function(list){
//   return Math.min(...list)
// }

// const max = function(list){
//   return Math.max(...list)
// }

//#34 Remove First and Last CHaracter (8kyu)
function removeChar(str){
  return str.slice(1, -1)
}

const removeChar = str => str.slice(1, -1)

//#35 The Feast of Many Beast (8kyu)
function feast(beast, dish){
  if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1)){
      return true
  } else {
      return false
  }
}

const feast = (beast, dish) => (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1])

//#36 String repeat
const repeatStr = (n,s) => s.repeat(n)


 //#37 Goals messi function
 function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let goalTotal = laLigaGoals + copaDelReyGoals + championsLeagueGoals 
  return goalTotal 
}
goals (2,3,4)

// add the value "codewars" to the websites array 1,000 times
const websites = [];
while (websites.length < 1000){
  websites.push('codewars')
} 

//#38 Opposite number
function opposite(number) {
  let opp = number * -1
  return opp
  }