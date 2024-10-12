// complete this js code
//Define a Person class
// class Person(name, age){
//     this.name = name;
//     this.age = age;
//   }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

  // greet method in Person class
  // greet() {
  //   console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
  // }

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
}
	




// Define Employee class that extends Person

//function Employee(name, age, jobTitle) {}
class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call the parent class constructor (Person) to initialize name and age
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // jobGreet method in Employee class
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
  }
	
}


// Creating an instance of Person
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old

// Creating an instance of Employee
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
