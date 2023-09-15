console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  removeHobby(hobbyToRemove) {
    this.hobbies = this.hobbies.filter((hobby) => hobby !== hobbyToRemove);
  }

  greeting() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }

  greeting() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.occupation}`);
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const jonathan = new Person("Jonathan", "6", "House", [
  "bicycling",
  "wargaming",
  "coding",
]);

jonathan.addHobby("juggling");

jonathan.removeHobby("juggling");

const olaf = new Coder("Olaf", 2, "Apartment", [
  "darts",
  "poker",
  "motorcycle maintenance",
]);

olaf.addHobby("gardening");

// test logs
console.log(jonathan.hobbies);
jonathan.greeting();
console.log(olaf.hobbies);
olaf.greeting();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  constructor() {
    this.result = 0;
  }

  #calculate(a, b, operation) {
    let x;
    let y;

    if (b === undefined) {
      x = this.result;
      y = a;
    } else {
      x = a;
      y = b;
    }
    return operation(x, y);
  }

  add(a, b) {
    this.result = this.#calculate(a, b, (x, y) => x + y);
    return this.result;
  }

  subtract(a, b) {
    this.result = this.#calculate(a, b, (x, y) => x - y);
    return this.result;
  }

  multiply(a, b) {
    this.result = this.#calculate(a, b, (x, y) => x * y);
    return this.result;
  }

  divide(a, b) {
    this.result = this.#calculate(a, b, (x, y) => x / y);
    return this.result;
  }

  displayResult() {
    console.log(this.result);
  }
}

const calculator = new Calculator();

// test logs
calculator.displayResult();
calculator.add(1, 2);
calculator.displayResult();
calculator.add(3);
calculator.displayResult();
calculator.multiply(2);
calculator.displayResult();
calculator.subtract(20, 10);
calculator.displayResult();
calculator.divide(6, 3);
calculator.displayResult();
