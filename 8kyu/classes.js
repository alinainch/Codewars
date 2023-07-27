class Person {
  constructor(name){
    this.name = name
  }
  
  walk(){
    console.log('walk')
  }
}

const person = new Person('Alina')


class Car {
  constructor(make, model){
    this.make = make,
    this.model = model
  }

  run(){
    console.log('car is running')
  }
}

const car = new Car('Honda', 'Civic')
