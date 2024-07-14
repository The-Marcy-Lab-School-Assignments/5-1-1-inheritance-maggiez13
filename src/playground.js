// q2
// class Person {
//   constructor(name, age) {
//     this.name = name; 
//     this.age = age;
//   }
//   greeting() {
//     return `Hello, my name is ${this.name}, and I am ${this.age} years old.`
//   }
// }

// class Athlete extends Person {
//   constructor(name, age, sport, yoe) {
//     super(name, age);
//     this.sport = sport;
//     this.yoe = yoe;
//   }
//   athleticGreeting() {
//     if(this.yoe === 1) {
//       return this.greeting() + ` I have played ${this.sport} for a year.`;
//     } else {
//       return this.greeting() + ` I have played ${this.sport} for ${this.yoe} years.`;
//     }
//   }
// }


// const person1 = new Person("Mei", 22);
// console.log(person1); 
// console.log(person1.greeting()); // Hello, my name is Mei, and I am 22 years old.

// const athlete1 = new Athlete("Devin", 27, "basketball", 9);
// console.log(athlete1);
// console.log(athlete1.athleticGreeting()); // Hello, my name is Devin, and I am 27 years old. I have played basketball for 9 years.

// const athlete2 = new Athlete("Reed", 22, "soccer", 1);
// console.log(athlete2.athleticGreeting()); // Hello, my name is Reed, and I am 22 years old. I have played soccer for a year. 



// q3
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    return 'Some generic sound.';
  }
}

class Dog extends Animal {
  makeSound() {
    return 'Woof!';
  }
}

class Cat extends Animal {
  makeSound() {
    return 'Meow!';
  }
}

// polymorphic behavior
const animal1 = new Animal('Generic Animal');
const dog1 = new Dog('Buddy');
const cat1 = new Cat('Whiskers');


// if subclass doesn't have makeSound() will output "Some generic sound."
console.log(animal1.makeSound()); // Some generic sound.
console.log(dog1.makeSound()); // Woof! 
console.log(cat1.makeSound()); // Meow!