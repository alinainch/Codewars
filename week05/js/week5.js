//solutions

//#1 Debug sayHello
function sayHello(name) {
  return 'Hello, ' + name
}

//#2 Reversed Strings
const solution = str => str.split('').reverse().join('')

//#3 Remove String Spaces
const noSpace = x => x.replaceAll(' ', '')

//#4  Sentence Smash 
//takes an array of words and smashes them together into a sentence
//return sentence
//add space between each word
//no space at beginning or end of sentence (trimmed)
const smash = words => words.join(' ')

//#5 Keep up the hoop
function hoopCount (n) {
  let inputHoop = 0
  if(n >= 10){
    return ('Great, now move on to tricks')
  } else if(n < 10){
    return ('Keep at it until you get it')
  }
}

//#6 FInd the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return (Math.min(...args))
  }
}

//#7 YOu Can't Code Under Pressue #1
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2 ;
}


//#8 Function 1 - hello world
function greet(){
  return "hello world!"
}