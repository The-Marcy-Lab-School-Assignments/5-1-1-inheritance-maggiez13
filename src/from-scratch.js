class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1; 
    this.side2 = side2; 
    this.side3 = side3;
    this.side4 = side4;
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4; 
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    super(side1, side2, side1, side2);
  }
  getArea() {
    return this.side1 * this.side2;
  }
  // from lab review - CORRECT WAY TO DO
  // getDiagonal() {
  //   return Math.sqrt(this.side1 ** 2 + this.s2 ** 2);
  // }
}

class Square extends Rectangle {
  constructor(side1) {
    super(side1, side1, side1, side1)
  }
  // from lab review - CORRECT WAY TO DO
  // constructor(side1) {
  //   super(side1, side1)
  // }
  getDiagonal() {
    return Math.sqrt(2) * this.side1;
    // return Math.sqrt((this.getArea() * 2));
  }
}

/* Be creative with this one! */
class Person {
  static #instances = []; // private variable to track each new instance

  constructor(name, age, likesCollecting) {
    this.name = name;
    this.age = age;
    this.likesCollecting = likesCollecting;
    this.collection = [];
    Person.#instances.push(this); // add new instance to tracking list
  }

  // instance Methods
  addToCollection(item) {
    this.collection.push(item);
    return `${item} has been added to ${this.name}'s collection.`;
  }

  showCollection() {
    return `${this.name}'s Collection: ${this.collection.join(', ')}`;
  }

  celebrateBirthday() {
    this.age += 1;
    return `Happy birthday, ${this.name}! You are now ${this.age} years old!`;
  }

  // class Methods
  static list() {
    return Person.#instances;
  }

  static find(attribute, value) {
    return Person.#instances.find(person => person[attribute] === value);
  }
}

const person1 = new Person('Mei', 22, true);
const person2 = new Person('Andy', 24, false);

console.log(person1.addToCollection('Sonny Angels')); //Sonny Angels has been added to Mei's collection.
console.log(person1.showCollection()); // Mei's collection: Sonny Angels
console.log(person1.addToCollection('Smiskis')); //Smiskis has been added to Mei's collection.
console.log(person1.showCollection()); // Mei's collection: Sonny Angels, Smiskis
console.log(person1.celebrateBirthday()); // Happy birthday, Mei! You are now 23 years old!

console.log(Person.list()); // lists all instances of Person
console.log(Person.find('name', 'Andy')); // finds instance of Person with the name 'Andy'
console.log(Person.find('age', 23)); // finds instance of Person age 23 (23 since incremented age in celebrateBirthday)


module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
