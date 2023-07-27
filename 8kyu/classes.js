class Person {
  constructor(name){
    this.name = name
  }
  
  walk(){
    console.log('walk')
  }
}

const person = new Person('Alina')


class Car extends Person {
  constructor(name, make, model){
    super(name)
    this.make = make,
    this.model = model
  }

  run(){
    console.log('car is running')
  }
}

const car = new Car('Honda', 'Civic')

// to inherit the name property from the Person class - need to pass it in the paramter (name) and then call super() -> super(name)