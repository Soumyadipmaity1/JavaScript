# Javascript and Classes

# Object-Oriented Programming in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to design applications and software. These objects are created using classes or prototypes, and they interact with one another to create applications.

## Key Concepts of OOP in JavaScript

### 1. Encapsulation
Encapsulation is the bundling of data, along with the methods that operate on that data, into a single unit. In JavaScript, this is achieved through the use of objects.

### 2. Inheritance
Inheritance is a mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods.

### 3. Polymorphism
Polymorphism allows us to treat objects of a superclass as if they are objects of any one of its subclasses.

### 4. Abstraction
Abstraction is a mechanism that allows us to represent the relevant features without including the background details.

## Example

Here's a basic example of how OOP can be implemented in JavaScript:

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    return `Engine of ${this.make} ${this.model} started!`;
  }
}

const myCar = new Car('Toyota', 'Corolla', 2005);
console.log(myCar.startEngine());

```

## Object
- collection of properties and methods
- toLowercase

## Why ues OOP

## Parts of OOP
Object literal

- constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 pilars

- Abstraction
- Encaptulation
- Inherietance 
- Polymorphism
