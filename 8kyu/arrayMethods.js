// Output: 1, 2, 3
let arr = [1, 2, 3]
for(let i = 0; i < arr.length; i++){
  console.log(arr[i])
}


//forEach
arr.forEach(e => console.log(e))

//filter
const canDrink = ages.filter(age => age >= 21)

const retail = companies.filter(e => company.category === 'retail')

const eightiesCompanies = companies.filter(e => company.start >= 1980 && company.start < 1990)

//map (creates new array)
const companyNames = companies.filter(e => company.name)

//can do multiple operations with map 
const agesSquare = ages
.map(age => Math.sqrt(age))
.map(age => age * 2)

//sort
//will only sort the first lexical order not the values themselves
const sortAges2 = ages.sort()

const sortAges2 = ages.sort((a, b) => a - b)